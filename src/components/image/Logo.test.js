import { render, screen } from "../../__testUtils__";
import Logo from "./Logo";

describe("Logo Component", () => {
  test("should show properly", () => {
    render(<Logo />);
    screen.getByAltText("logo");
  });
});
