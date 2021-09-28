import React from "react";
import { useParams } from "react-router-dom";

export default function Info() {
  let { name } = useParams();

  return (
    <>
      <div>This page shows details of {name}</div>
    </>
  );
}
