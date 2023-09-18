import { fireEvent, render, screen } from "@testing-library/react";
import { Stars } from "../src/components/stars";
import "@testing-library/jest-dom";

describe("Stars", () => {
  it("handle bad data", () => {
    render(<Stars starValue={1} numberOfStars={null} />);
    const component = screen.getByTestId("starsComponent");
    expect(component.textContent).toEqual("Star rating not yet available");
  });

  it("renders lowest value", () => {
    render(<Stars starValue={1} numberOfStars={5} />);
    const component = screen.getByTestId("starsComponent");
    expect(component.textContent).toEqual("★☆☆☆☆");
  });

  it("renders highest value", () => {
    render(<Stars starValue={5} numberOfStars={5} />);
    const component = screen.getByTestId("starsComponent");
    expect(component.textContent).toEqual("★★★★★");
  });

  it("no value as default", () => {
    render(<Stars />);
    const component = screen.getByTestId("starsComponent");
    expect(component.textContent).toEqual("☆☆☆☆☆");
  });

  it("change value on click", () => {
    render(<Stars starValue={5} numberOfStars={5} />);
    const component = screen.getByTestId("starsComponent");
    expect(component.textContent).toEqual("★★★★★");

    fireEvent.click(screen.getByTestId("button-1"));
    expect(component.textContent).toEqual("★☆☆☆☆");

    fireEvent.click(screen.getByTestId("button-2"));
    expect(component.textContent).toEqual("★★☆☆☆");
  });

  it("reset value if clicking on the current star value", () => {
    render(<Stars starValue={5} numberOfStars={5} />);
    const component = screen.getByTestId("starsComponent");
    expect(component.textContent).toEqual("★★★★★");
    fireEvent.click(screen.getByTestId("button-5"));
    expect(component.textContent).toEqual("☆☆☆☆☆");
  });

  it("hover state", () => {
    render(<Stars starValue={5} numberOfStars={5} />);
    const component = screen.getByTestId("starsComponent");
    expect(component.textContent).toEqual("★★★★★");
    fireEvent.mouseOver(screen.getByTestId("button-4"));
    expect(component.textContent).toEqual("★★★★☆");
  });
});
