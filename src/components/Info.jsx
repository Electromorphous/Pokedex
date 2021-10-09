import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePokemons } from "../PokemonProvider";
import Loader from "./Loader";
import TypeLabel from "./TypeLabel";
import StatLevels from "./StatLevels";
import * as Vibrant from "node-vibrant";

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

  const getPokemonType = (type) => {
    if (type === "grass")
      return <TypeLabel key={1} type="grass" color="ForestGreen" />;
    if (type === "poison")
      return <TypeLabel key={2} type="poison" color="DarkOrchid" />;
    if (type === "fire") return <TypeLabel key={3} type="fire" color="red" />;
    if (type === "water")
      return <TypeLabel key={4} type="water" color="DodgerBlue" />;
    if (type === "normal")
      return <TypeLabel key={5} type="normal" color="chocolate" />;
    if (type === "fighting")
      return <TypeLabel key={6} type="fighting" color="brown" />;
    if (type === "ground")
      return <TypeLabel key={7} type="ground" color="DarkGoldenRod" />;
    if (type === "rock")
      return <TypeLabel key={8} type="rock" color="DarkGrey" />;
    if (type === "bug") return <TypeLabel key={9} type="bug" color="green" />;
    if (type === "ghost")
      return <TypeLabel key={10} type="ghost" color="LightSlateGrey" />;
    if (type === "steel")
      return <TypeLabel key={11} type="steel" color="DimGrey" />;
    if (type === "electric")
      return <TypeLabel key={12} type="electric" color="Gold" dark={true} />;
    if (type === "psychic")
      return <TypeLabel key={13} type="psychic" color="pink" dark={true} />;
    if (type === "ice")
      return <TypeLabel key={14} type="ice" color="LightBlue" dark={true} />;
    if (type === "dragon")
      return <TypeLabel key={15} type="dragon" color="LightCyan" dark={true} />;
    if (type === "dark")
      return <TypeLabel key={16} type="dark" color="black" />;
    if (type === "fairy")
      return <TypeLabel key={17} type="fairy" color="LightPink" dark={true} />;
  };

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
                  return getPokemonType(obj.type.name);
                })}
              </div>
            </p>
          </section>
          <section className="properties">
            <div className="basic-info-section">
              <p>Height: {info.height}</p>
              <p>Weight: {info.weight}</p>
              <p>Base experience: {info.base_experience}</p>
            </div>
            <div className="ability-section">
              <h1>Abilities</h1>
              <div className="abilities">
                {info.abilities.map((ab) => {
                  return (
                    <div className="ability" key={ab.slot}>
                      {ab.ability.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <section className="stats">
            <StatLevels stats={info.stats} />
          </section>
        </div>
      ) : (
        <Loader loader={loader} />
      )}
    </>
  );
}
