import React, { useState, useEffect, useRef } from "react";

import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: 14,
    height: 300,
  },
  cardActionArea: {
    height: 300,
  },
  pokemonName: {
    textAlign: "center",
    textTransform: "capitalize",
  },
}));

export default function PokemonCard({ pokemon }) {
  const classes = useStyles();
  const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;

  return (
    <Grid className="card-parent" item xs={12} sm={6} md={3} key={pokemon.id}>
      <div className="card">
        <Card
          className={classes.card}
          style={{ background: pokemon.background }}
          elevation={3}
        >
          <CardActionArea className={classes.cardActionArea}>
            <CardMedia
              component="img"
              alt={pokemon.name}
              height="250"
              src={imageURL}
              title={pokemon.name}
            />
            <div className="overlay"></div>
            <CardContent>
              <Typography gutterBottom className={classes.pokemonName}>
                {pokemon.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </Grid>
  );
}
