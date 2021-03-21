import { render, screen } from "../../__testUtils__";
import React from "react";
import ColorSet from "./ColorSet";

describe("ColorSet Component", () => {
  test(`should shows properly`, () => {
    const colors = ["#fff", "#fff", "#fff", "#fff", "#fff"];
    render(<ColorSet colors={colors} />);
    const colorSet = screen.getByTestId("color-set");
    expect(colorSet.childNodes).toHaveLength(5);
  });
});
