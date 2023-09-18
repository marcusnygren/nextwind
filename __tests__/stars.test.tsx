import { render, screen } from "@testing-library/react";
import { Stars } from "../src/components/stars";
import "@testing-library/jest-dom";

describe("Stars", () => {
  it("renders lowest value", () => {
    render(<Stars starValue={1} numberOfStars={5} />);
    const component = screen.getByTestId("starsComponent")
    expect(component.textContent).toEqual("10000");
  });

  it("renders highest value", () => {
    render(<Stars starValue={5} numberOfStars={5} />);
    const component = screen.getByTestId("starsComponent");
    expect(component.textContent).toEqual("00001");
  });

  it("no value as default", () => {
    render(<Stars />);
    const component = screen.getByTestId("starsComponent");
    expect(component.textContent).toEqual("00000");
  })
});
