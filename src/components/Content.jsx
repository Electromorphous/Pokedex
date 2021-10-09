import React from "react";
import { usePokemons } from "../PokemonProvider";
import { Grid, CircularProgress } from "@material-ui/core";
import PokemonCard from "./PokemonCard.jsx";

export default function Content({ inputText }) {
  const pokemons = usePokemons();

  return (
    <>
      {pokemons.length === 0 ? (
        <CircularProgress color="secondary" />
      ) : (
        <Grid container className="content-container">
          {/* left padding */}
          <Grid item xs={2} sm={1} />

          {/* content */}
          <Grid
            item
            container
            xs={9}
            sm={10}
            spacing={3}
            justifyContent="center"
          >
            {pokemons.map((pokemon) =>
              pokemon.name.includes(inputText.toLowerCase()) ? (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              ) : (
                false
              )
            )}
          </Grid>

          {/* right padding */}
          <Grid item xs={1} sm={1} />
        </Grid>
      )}
    </>
  );
}
