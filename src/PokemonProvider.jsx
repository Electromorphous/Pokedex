import React, { useContext, useState, useEffect, useMemo } from "react";
import * as Vibrant from "node-vibrant";

const PokemonContext = React.createContext();

export function usePokemons() {
  return useContext(PokemonContext);
}

export default function PokemonProvider({ children }) {
  const getPokemons = () => {
    const [array, setArray] = useState([]);

    async function fetchData() {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=300"); // max limit = 649
      const res = await data.json();

      return Promise.all(
        res.results.map(async (pokemon) => {
          const { url } = pokemon;
          const id = url.substring(34, url.length - 1);
          let v = new Vibrant(
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
          );
          const palette = await v.getPalette();

          return {
            ...pokemon,
            background: `rgba(${palette.Vibrant._rgb[0]}, ${palette.Vibrant._rgb[1]}, ${palette.Vibrant._rgb[2]}, 0.6)`,
            id,
          };
        })
      );
    }

    useEffect(() => {
      fetchData().then(setArray);
    }, []);

    return useMemo(() => {
      return { array };
    }, [array]);
  };

  const pokemons = getPokemons().array;

  return (
    <PokemonContext.Provider value={pokemons}>
      {children}
    </PokemonContext.Provider>
  );
}
