import React from "react";
import { LinearProgress } from "@material-ui/core";

export default function StatLevels({ stats }) {
  return (
    <>
      {stats.map((obj) => {
        return (
          <div className="bar" key={obj.stat.name}>
            <LinearProgress
              className="progress"
              variant="determinate"
              value={obj.base_stat / 2.5}
            />
            <div className="stat-text">
              <span className="stat-name">{obj.stat.name}</span>
              <span className="stat-value">{obj.base_stat}</span>
            </div>
          </div>
        );
      })}
    </>
  );
}
