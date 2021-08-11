import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";

export default function App() {
  return <Home />;
}

function Home() {
  const [inputText, setInputText] = useState("");
  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <Header inputText={inputText} setInputText={setInputText} />
      </Grid>
      <Grid item xs={12}>
        <Content inputText={inputText} />
      </Grid>
    </Grid>
  );
}
