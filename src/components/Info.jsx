import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import * as Vibrant from "node-vibrant";

export default function Info() {
  let { name } = useParams();

  const [info, setInfo] = useState({});
  const [loader, setLoader] = useState(true);
  const [bannerColor, setBannerColor] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoader(false);
    }, 7000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  async function fetchDetails() {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
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
    if (info.name) fetchColor().then(setBannerColor);
  }, [info]);

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${info.id}.svg`;
  return (
    <>
      {info.name ? (
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
        </div>
      ) : (
        <Loader loader={loader} />
      )}
    </>
  );
}
