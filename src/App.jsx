import React, { useState, useEffect, useMemo } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Info from "./components/Info";
import * as Vibrant from "node-vibrant";

function usePokemons() {
  const [pokemons, setPokemons] = useState([]);

  async function fetchData() {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=400"); // max limit = 649
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
    fetchData().then(setPokemons);
  }, []);

  return useMemo(() => {
    return { pokemons };
  }, [pokemons]);
}

export default function App() {
  const { pokemons } = usePokemons();

  return (
    <>
      <Switch>
        <Route exact from="/">
          <Home pokemons={pokemons} />
        </Route>
        <Route exact from="/:name" component={Info} />
      </Switch>
    </>
  );
}
