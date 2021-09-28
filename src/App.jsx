import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Info from "./components/Info";

export default function App() {
  return (
    <>
      <Switch>
        <Route exact from="/" render={(props) => <Home {...props} />} />
        <Route exact from="/:name" render={(props) => <Info {...props} />} />
      </Switch>
    </>
  );
}
