// Grid.js
import React from "react";
import { Line } from "@react-three/drei";

const Grid = ({ size = 10, divisions = 1 }) => {
  const lines = [];

  for (let i = -size; i <= size; i += divisions) {
    lines.push(
      <Line
        key={`h-${i}`}
        points={[
          [-size, 0, i],
          [size, 0, i],
        ]}
        color="black"
      />,
      <Line
        key={`v-${i}`}
        points={[
          [i, 0, -size],
          [i, 0, size],
        ]}
        color="black"
      />
    );
  }

  return <>{lines}</>;
};

export default Grid;
