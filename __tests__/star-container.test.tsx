import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StarContainer from "@/components/star-container";

describe("Star container", () => {
  it("Should show Star value", () => {
    render(<StarContainer />);
    const component = screen.getByTestId("starContainer");
    expect(component).toHaveTextContent("Current value: 0");
  });
});
