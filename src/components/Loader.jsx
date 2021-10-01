import React from "react";
import { CircularProgress } from "@material-ui/core";

export default function Loader({ loader }) {
  return (
    <>
      {loader ? (
        <CircularProgress color="secondary" />
      ) : (
        <h1>Pokemon not found</h1>
      )}
    </>
  );
}
