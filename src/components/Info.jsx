import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

export default function Info() {
  let { name } = useParams();

  const [info, setInfo] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoader(false);
    }, 5000);
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

  return (
    <>
      {info.name ? (
        <>
          <img src={imageUrl} alt={info.name} />
          <h1>{info.name}</h1>
        </>
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
