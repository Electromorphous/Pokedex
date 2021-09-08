import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import React, { useEffect, useState, useMemo } from "react";
import { Grid } from "@material-ui/core";
import PokemonCard from "./PokemonCard.jsx";
import { CircularProgress } from "@material-ui/core";

export default function Content({ inputText }) {
  const [pokemons, setPokemons] = useState([]);

  async function fetchData() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=649"); // max limit = 649
    res.json().then((res) => {
      const pok = res.results.map((pokemon) => {
        const { url } = pokemon;
        const id = url.substring(34, url.length - 1);

        return {
          ...pokemon,
          background: `rgba(${palette.Vibrant._rgb[0]}, ${palette.Vibrant._rgb[1]}, ${palette.Vibrant._rgb[2]}, 0.5)`,
          id,
        };
      });

      setPokemons(pok);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.includes(inputText.toLowerCase())
  );

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
