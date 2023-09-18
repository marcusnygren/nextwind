import { fireEvent, render, screen } from "@testing-library/react";
import Page from "../src/app/page";
import "@testing-library/jest-dom";

describe("Page", () => {
  it("Should show Star value", () => {
    render(<Page />);
    const component = screen.getByTestId("main");
    expect(component).toHaveTextContent("Current value:");
  });
});
