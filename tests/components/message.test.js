import { render } from "@testing-library/react";
import Message from "@components/message.js";

describe("Message Component", () => {
  it("should render", () => {
    const component = render(<Message message="test" />);
    expect(component).toMatchSnapshot();
  });
});
