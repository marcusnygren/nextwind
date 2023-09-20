import { fireEvent, render, screen } from "@testing-library/react";
import Stars from "@/components/stars-container/stars";
import "@testing-library/jest-dom";

describe("Stars", () => {
  it("handle bad number of stars input", () => {
    render(<Stars initialValue={1} numberOfStars={null} />);
    const component = screen.getByText("Star rating not yet available");
    expect(component).toBeDefined();
  });

  it("should present a 5-star rating bar as default", () => {
    render(<Stars />);
    const component = screen.getByTestId("starsComponent");
    expect(component.textContent).toEqual("☆☆☆☆☆");
  });

  it("handle no initial value given", () => {
    render(<Stars numberOfStars={6} />);
    const component = screen.getByTestId("starsComponent");
    expect(component.textContent).toEqual("☆☆☆☆☆☆");
  });

  it("handle zero as initial value given", () => {
    render(<Stars initialValue={0} numberOfStars={3} />);
    const component = screen.getByTestId("starsComponent");
    expect(component.textContent).toEqual("☆☆☆");
  });

  it("handle higher rating than number of stars", () => {
    render(<Stars initialValue={6} numberOfStars={4} />);
    const component = screen.getByTestId("starsComponent");
    expect(component.textContent).toEqual("★★★★");
  });

  it("renders lowest value", () => {
    render(<Stars initialValue={1} numberOfStars={3} />);
    const component = screen.getByTestId("starsComponent");
    expect(component.textContent).toEqual("★☆☆");
  });

  it("renders highest value", () => {
    render(<Stars initialValue={5} />);
    const component = screen.getByTestId("starsComponent");
    expect(component.textContent).toEqual("★★★★★");
  });

  it("change value on click", () => {
    render(<Stars initialValue={5} />);
    const component = screen.getByTestId("starsComponent");
    expect(component.textContent).toEqual("★★★★★");

    fireEvent.click(screen.getByTestId("button-1"));
    expect(component.textContent).toEqual("★☆☆☆☆");

    fireEvent.click(screen.getByTestId("button-2"));
    expect(component.textContent).toEqual("★★☆☆☆");
  });

  it("reset value if clicking on the current star value", () => {
    render(<Stars initialValue={5} />);
    const component = screen.getByTestId("starsComponent");
    expect(component.textContent).toEqual("★★★★★");
    fireEvent.click(screen.getByTestId("button-5"));
    expect(component.textContent).toEqual("☆☆☆☆☆");
  });

  it("hover state", () => {
    render(<Stars initialValue={5} />);
    const component = screen.getByTestId("starsComponent");
    expect(component.textContent).toEqual("★★★★★");
    fireEvent.mouseOver(screen.getByTestId("button-4"));
    expect(component.textContent).toEqual("☆☆☆☆☆"); // should ideally add a check for class name isHovered or check that color is not black
  });
});
