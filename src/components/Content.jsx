import React, { useEffect, useState } from "react";
// import { Grid } from "@material-ui/core";
import { Grid } from "react-virtualized";
import PokemonCard from "./PokemonCard.jsx";
import { CircularProgress } from "@material-ui/core";

export default function Content({ inputText }) {
  const [pokemons, setPokemons] = useState([]);

  async function fetchData() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=80"); // max limit = 649
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
        <Grid
          height={400}
          width={800}
          rowCount={filteredPokemons.length}
          rowHeight={250}
          columnCount={4}
          columnWidth={200}
          cellRenderer={({ columnIndex, key, rowIndex, style, parent }) => {
            const pokemon = filteredPokemons[rowIndex][columnIndex];
            return (
              <div key={key} style={style}>
                <h2>Hello</h2>
                {console.log(pokemon)}
              </div>
            );
            // return <PokemonCard key={key} style={style} pokemon={pokemon} />;
          }}
        />
      )}
    </>
  );
}
