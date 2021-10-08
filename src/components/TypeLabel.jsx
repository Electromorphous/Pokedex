import React from "react";

export default function TypeLabel({ type, color, dark }) {
  return (
    <>
      {dark ? (
        <span className="dark type" style={{ background: color }}>
          {type}
        </span>
      ) : (
        <span className="type" style={{ background: color }}>
          {type}
        </span>
      )}
    </>
  );
}
