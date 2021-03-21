import React from "react";
import Color from "./Color";

const ColorSet = ({ colors }) => {
  return (
    <div data-testid="color-set">
      {colors.map((color, idx) => (
        <Color key={`${color}-${idx}`} color={color} />
      ))}
    </div>
  );
};

export default ColorSet;
