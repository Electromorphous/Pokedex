import React, { useEffect, useState, useMemo } from "react";
import { Grid } from "@material-ui/core";
import PokemonCard from "./PokemonCard.jsx";
import * as Vibrant from "node-vibrant";

function usePokemons() {
  const [pokemons, setPokemons] = useState([]);

  async function fetchData() {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=400"); // max limit = 649
    const res = await data.json();

    return await Promise.all(
      res.results.map(async (pokemon) => {
        const { url } = pokemon;
        const id = url.substring(34, url.length - 1);
        let v = new Vibrant(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
        );
        const palette = await v.getPalette();

        return {
          ...pokemon,
          background: `rgba(${palette.Vibrant._rgb[0]}, ${palette.Vibrant._rgb[1]}, ${palette.Vibrant._rgb[2]}, 0.5)`,
          id,
        };
      })
    );
  }

  useEffect(() => {
    fetchData().then(setPokemons);
  }, []);

  return useMemo(() => {
    return { pokemons };
  }, [pokemons]);
}

export default function Content({ inputText }) {
  const { pokemons } = usePokemons();

  return (
    <Grid container>
      {/* left padding */}
      <Grid item xs={1} />

      {/* content */}
      <Grid item container xs={10} spacing={3} justifyContent="center">
        {pokemons.map((pokemon) =>
          !!pokemon.name.includes(inputText.toLowerCase()) ? (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ) : (
            false
          )
        )}
      </Grid>

      {/* right padding */}
      <Grid item xs={1} />
    </Grid>
  );
}
