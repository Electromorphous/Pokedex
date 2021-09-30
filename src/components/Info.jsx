import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Info() {
  let { name } = useParams();

  const [info, setInfo] = useState({});

  async function fetchDetails() {
    try {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      return data.json();
    } catch (e) {
      return null;
    }
  }

  useEffect(() => {
    fetchDetails().then(setInfo);
  }, []);

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${info.id}.svg`;

  return (
    <>
      {!!info.id ? (
        <>
          <img src={imageUrl} alt={info.name} />
          <h1>{info.name}</h1>
        </>
      ) : (
        <>
          <h1>Pokemon not found</h1>
        </>
      )}
    </>
  );
}
