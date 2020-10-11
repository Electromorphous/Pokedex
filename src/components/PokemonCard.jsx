import React, { useState, useEffect, useRef } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import * as Vibrant from "node-vibrant";

let backgroundColor;

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: 14,
    height: 300,
    backgroundColor: backgroundColor,
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
  // u had typed the url twice 🤦🏻‍♂️
  const vib = new Vibrant(imageURL);
  const counter = useRef(0);

  useEffect(() => {
    console.log(
      `${pokemon.name} card rendered ${counter.current} time${
        counter.current > 1 ? "s" : ""
      }`
    );
    counter.current += 1;
  });

  const [bgColor, setBgColor] = useState();

  useEffect(() => {
    vib.getPalette((err, palette) => {
      backgroundColor = `rgb(${palette.Vibrant._rgb[0]}, ${palette.Vibrant._rgb[1]}, ${palette.Vibrant._rgb[2]})`;
      setBgColor(backgroundColor);
    });
    return () => {};
  }, []);

  return (
    <div className="card">
      <Card
        className={classes.card}
        style={{ background: bgColor }}
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
          <CardContent>
            <Typography gutterBottom className={classes.pokemonName}>
              {pokemon.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
