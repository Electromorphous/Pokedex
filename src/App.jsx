import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Info from "./components/Info";
import PokemonProvider from "./PokemonProvider";

export default function App() {
  return (
    <>
      <PokemonProvider>
        <Switch>
          <Route exact from="/" component={Home} />
          <Route exact from="/:id" component={Info} />
        </Switch>
      </PokemonProvider>
    </>
  );
}
