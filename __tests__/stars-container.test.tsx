import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StarsContainer from "../src/components/stars-container";

describe("Stars container", () => {
  it("should show star value", () => {
    render(<StarsContainer />);
    const component = screen.getByTestId("currentValueText");
    expect(component).toHaveTextContent("Current value: 5");
  });

  it("change value on click", () => {
    render(<StarsContainer />);
    const component = screen.getByTestId("currentValueText");
    expect(component).toHaveTextContent("Current value: 5");

    fireEvent.click(screen.getByTestId("button-1"));
    expect(component).toHaveTextContent("Current value: 1");

    fireEvent.click(screen.getByTestId("button-2"));
    expect(component).toHaveTextContent("Current value: 2");
  });

  it("reset value if clicking on the current star value", () => {
    render(<StarsContainer />);
    const component = screen.getByTestId("currentValueText");
    expect(component).toHaveTextContent("Current value: 5");

    fireEvent.click(screen.getByTestId("button-5"));
    expect(component).toHaveTextContent("Current value: 0");
  });
});
