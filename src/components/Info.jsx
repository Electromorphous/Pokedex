import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePokemons } from "../PokemonProvider";
import Loader from "./Loader";
import * as Vibrant from "node-vibrant";
import TypeLabel from "./TypeLabel";

export default function Info() {
  let { id } = useParams();

  const [info, setInfo] = useState({});
  const [loader, setLoader] = useState(true);
  const [bannerColor, setBannerColor] = useState("");
  const pokemons = usePokemons();

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoader(false);
    }, 7000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  async function fetchDetails() {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return data.json();
  }

  async function fetchColor() {
    let v = new Vibrant(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${info.id}.svg`
    );
    const palette = await v.getPalette();
    return `rgba(${palette.Vibrant._rgb[0]}, ${palette.Vibrant._rgb[1]}, ${palette.Vibrant._rgb[2]}, 0.7)`;
  }

  useEffect(() => {
    fetchDetails().then(setInfo);
  }, []);

  useEffect(() => {
    if (pokemons.length > 0) setBannerColor(pokemons[id - 1].background);
    else if (info.id) fetchColor().then(setBannerColor);
  }, [info]);

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${info.id}.svg`;
  return (
    <>
      {info.id ? (
        <div className="pokemon-info">
          <div
            className="banner"
            style={{ backgroundColor: bannerColor }}
          ></div>
          <section className="top">
            <div className="image">
              <img className="pokemon-pic" src={imageUrl} alt={info.name} />
              <div className="overlay"></div>
            </div>
            <p className="title">
              <span className="name">{info.name}</span>#
              <span className="id">{id}</span>
              <div className="types">
                {info.types.map((obj) => {
                  if (obj.type.name === "grass")
                    return <TypeLabel type="grass" color="ForestGreen" />;
                  if (obj.type.name === "poison")
                    return <TypeLabel type="poison" color="DarkOrchid" />;
                  if (obj.type.name === "fire")
                    return <TypeLabel type="fire" color="red" />;
                  if (obj.type.name === "water")
                    return <TypeLabel type="water" color="DodgerBlue" />;
                  if (obj.type.name === "normal")
                    return <TypeLabel type="normal" color="chocolate" />;
                  if (obj.type.name === "fighting")
                    return <TypeLabel type="fighting" color="brown" />;
                  if (obj.type.name === "ground")
                    return <TypeLabel type="ground" color="DarkGoldenRod" />;
                  if (obj.type.name === "rock")
                    return <TypeLabel type="rock" color="DarkGrey" />;
                  if (obj.type.name === "bug")
                    return <TypeLabel type="bug" color="green" />;
                  if (obj.type.name === "ghost")
                    return <TypeLabel type="ghost" color="LightSlateGrey" />;
                  if (obj.type.name === "steel")
                    return <TypeLabel type="steel" color="DimGrey" />;
                  if (obj.type.name === "electric")
                    return (
                      <TypeLabel type="electric" color="Gold" dark={true} />
                    );
                  if (obj.type.name === "psychic")
                    return (
                      <TypeLabel type="psychic" color="pink" dark={true} />
                    );
                  if (obj.type.name === "ice")
                    return (
                      <TypeLabel type="ice" color="LightBlue" dark={true} />
                    );
                  if (obj.type.name === "dragon")
                    return (
                      <TypeLabel type="dragon" color="LightCyan" dark={true} />
                    );
                  if (obj.type.name === "dark")
                    return <TypeLabel type="dark" color="black" />;
                  if (obj.type.name === "fairy")
                    return (
                      <TypeLabel type="fairy" color="LightPink" dark={true} />
                    );
                })}
              </div>
            </p>
          </section>
          <section className="stats">
            <div className="abilities">
              <h1>Abilities</h1>
              {info.abilities.map((ab) => {
                return (
                  <span className="ability" key={ab.slot}>
                    {ab.ability.name}
                  </span>
                );
              })}
            </div>
          </section>
        </div>
      ) : (
        <Loader loader={loader} />
      )}
    </>
  );
}
