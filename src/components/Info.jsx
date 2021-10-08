import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePokemons } from "../PokemonProvider";
import Loader from "./Loader";
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
            <p className="pokemon-name">{info.name}</p>
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
