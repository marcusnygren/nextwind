import { render } from "@testing-library/react";
import Stars from "@/components/stars-container/stars";

it("renders stars unchanged", () => {
  const { container } = render(<Stars initialValue={3} numberOfStars={5} />);
  expect(container).toMatchSnapshot();
});
