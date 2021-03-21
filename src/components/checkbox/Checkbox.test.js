import userEvent from "@testing-library/user-event";
import { render, screen } from "../../__testUtils__";
import React from "react";
import CheckBox from "./CheckBox";

describe("CheckBox Component", () => {
  test(`should shows properly`, () => {
    render(<CheckBox>테스트</CheckBox>);
    screen.getByRole("checkbox");
  });

  test(`should call the function on Click`, () => {
    const onClick = jest.fn();
    render(<CheckBox onClick={onClick}>테스트</CheckBox>);
    const checkBox = screen.getByRole("checkbox");
    userEvent.click(checkBox);
    expect(onClick).toBeCalled();
  });
});
