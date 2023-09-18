import { render, screen } from "@testing-library/react";
import { Stars } from "../src/components/stars";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders lowest value", () => {
    render(<Stars starValue={1} numberOfStars={5} />);
    const text = screen.getByText("10000")
    expect(text).toBeInTheDocument();
  });

  it("renders highest value", () => {
    render(<Stars starValue={5} numberOfStars={5} />);
    const text = screen.getByText("00001");
    expect(text).toBeInTheDocument();
  });
});