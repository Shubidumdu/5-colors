import { render, screen } from "../../__testUtils__";
import Card from "./Card";

describe("Card Component", () => {
  test(`should shows properly`, () => {
    render(<Card>테스트</Card>);
    const card = screen.getByRole("main");
    expect(card.textContent).toBe("테스트");
  });
});
