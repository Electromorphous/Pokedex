import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { List } from "react-virtualized";
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
    <>
      {filteredPokemons.length === 0 ? (
        <CircularProgress color="secondary" />
      ) : (
        <>
          <List
            height={400}
            width={800}
            rowCount={filteredPokemons.length}
            rowHeight={320}
            rowRenderer={({ key, index, style, parent }) => {
              const pokemon = filteredPokemons[index];
              // return (
              //   <div key={key} style={style}>
              //     <h2>Hello {pokemon.id}</h2>
              //     {console.log(pokemon)}
              //   </div>
              // );

              return (
                <>
                  <Grid container>
                    {/* left padding */}
                    <Grid item xs={1} />

                    {/* content */}
                    <Grid item container xs={10} spacing={3} justify="center">
                      <Grid item xs={12} sm={6} md={3} key={key} style={style}>
                        <PokemonCard pokemon={pokemon} />
                      </Grid>
                    </Grid>

                    {/* right padding */}
                    <Grid item xs={1} />
                  </Grid>
                </>
              );
            }}
          />
        </>
      )}
    </>
  );
}
