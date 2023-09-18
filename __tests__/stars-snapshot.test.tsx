import { render } from "@testing-library/react";
import Stars from "../src/components/stars";

it("renders stars unchanged", () => {
  const { container } = render(<Stars starValue={3} numberOfStars={5} />);
  expect(container).toMatchSnapshot();
});
