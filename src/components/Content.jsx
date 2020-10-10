import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import PokemonCard from './PokemonCard.jsx'

export default function Content({inputText}) {
  const [pokemons, setPokemons] = useState([])

  async function fetchData() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=649");   // limit = 649
    res
      .json()
      .then(res => {
        const pok = res.results.map(pokemon => {
          const { url } = pokemon
          const id = url.substring(34, url.length - 1)

          return {
            ...pokemon,
            id
          }
        })

        setPokemons(pok)}
      )
  }

  useEffect(() => {
    fetchData();
  });
  
  const getPokemonCard = pokemon => {
    return (
      <Grid item xs={12} sm={6} md={3} key={pokemon.id}>
        <PokemonCard pokemon={pokemon} />
      </Grid>
    )
  }

  const filteredPokemons = pokemons.filter(pokemon => pokemon.name.includes(inputText.toLowerCase()) )

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

        {filteredPokemons.map(pokemon => {
            return getPokemonCard(pokemon)
        })}
      </Grid>

      {/* right padding */}
      <Grid item xs={1} />
    </Grid>
  )
}
