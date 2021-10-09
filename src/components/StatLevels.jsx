import React from "react";
import { LinearProgress, Typography, Box } from "@material-ui/core";

export default function StatLevels({ stats }) {
  return (
    <>
      {stats.map((obj) => {
        return (
          <LinearProgress
            key={obj.stat.name}
            className="progress-bar"
            variant="determinate"
            value={obj.base_stat}
          />
        );
      })}
    </>
  );
}
