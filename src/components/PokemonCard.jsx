import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: 17,
    height: 300,
    '&:hover': {
      backgroundColor: '#eee'
    }
  },
  cardActionArea: {
    height: 300
  },
  pokemonName: {
    textAlign: 'center',
    textTransform: 'capitalize'
  }
}))

export default function PokemonCard({ pokemon }) {
  const classes = useStyles()
  const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
    pokemon.id
  }.svg`
  return (
    <Card className={classes.card} elevation={3}>
      <CardActionArea className={classes.cardActionArea}>
        {/* <div className="pokemonImageDiv"> */}
        <CardMedia
          component="img"
          alt={pokemon.name}
          height="250"
          src={imageURL}
          title="Pokemon image"
        />
        {/* </div> */}
        <CardContent>
          <Typography gutterBottom className={classes.pokemonName}>
            {pokemon.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
