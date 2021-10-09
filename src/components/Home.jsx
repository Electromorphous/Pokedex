import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Header from "./Header.jsx";
import Content from "./Content.jsx";

export default function Home() {
  const [inputText, setInputText] = useState("");

  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <Header
          inputText={inputText}
          setInputText={setInputText}
          showSearchBar={true}
        />
      </Grid>
      <Grid item xs={12}>
        <Content inputText={inputText} />
      </Grid>
    </Grid>
  );
}
