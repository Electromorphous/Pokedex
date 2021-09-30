import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({}));

export default function Info() {
  let { name } = useParams();

  const [info, setInfo] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoader(false);
    }, 5500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  async function fetchDetails() {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return data.json();
  }

  useEffect(() => {
    fetchDetails().then(setInfo);
  }, []);

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${info.id}.svg`;

  const classes = useStyles();

  return (
    <>
      {info.name ? (
        <div className="pokemon-info">
          <div className="image">
            <img className="pokemon-pic" src={imageUrl} alt={info.name} />
            <div className="overlay"></div>
          </div>
          <p className="pokemon-name">{info.name}</p>
        </div>
      ) : (
        <>
          {loader ? (
            <CircularProgress color="secondary" />
          ) : (
            <h1>Pokemon not found</h1>
          )}
        </>
      )}
    </>
  );
}
