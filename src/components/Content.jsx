import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import PokemonCard from "./PokemonCard.jsx";

export default function Content({ pokemons, inputText }) {
  return (
    <>
      {pokemons.length === 0 ? (
        <CircularProgress color="secondary" />
      ) : (
        <Grid container>
          {/* left padding */}
          <Grid item xs={1} />

          {/* content */}
          <Grid item container xs={10} spacing={3} justifyContent="center">
            {pokemons.map((pokemon) =>
              pokemon.name.includes(inputText.toLowerCase()) ? (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              ) : (
                false
              )
            )}
          </Grid>

          {/* right padding */}
          <Grid item xs={1} />
        </Grid>
      )}
    </>
  );
}
