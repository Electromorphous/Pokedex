import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import PokemonCard from './PokemonCard.jsx'
import api from '../utils/api.js'

export default function Content() {
  const [pokemons, setPokemons] = useState([])

  api.getPokemons().then(pokemons => {
    setPokemons(pokemons)
  })

  const getPokemonCard = pokemon => {
    return (
      <Grid item xs={12} sm={6} md={3} key={pokemon.id}>
        <PokemonCard pokemon={pokemon} />
      </Grid>
    )
  }

  return (
    <Grid container>
      {/* left padding */}
      <Grid item xs={1} />

      {/* content */}
      <Grid item container xs={10} spacing={3} justify="center">
        {/* <Grid item xs={12} sm={6} md={3}>
          <PokemonCard pokemon={pokmon} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <PokemonCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <PokemonCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <PokemonCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <PokemonCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <PokemonCard />
        </Grid> */}

        {pokemons.map(pokemon => {
          return getPokemonCard(pokemon)
        })}
      </Grid>

      {/* right padding */}
      <Grid item xs={1} />
    </Grid>
  )
}
