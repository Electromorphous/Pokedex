import React from "react";
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
    borderRadius: 17,
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

  let vib = new Vibrant(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`
  );
  vib.getPalette((err, palette) => {
    console.log(palette);
    backgroundColor = `rgb(${palette.Vibrant._rgb[0]}, ${palette.Vibrant._rgb[1]}, ${palette.Vibrant._rgb[2]})`;
    console.log(backgroundColor);
  });

  return (
    <div className="card">
      <Card className={classes.card} elevation={3}>
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
