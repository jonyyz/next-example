import { render } from "@testing-library/react";
import StoreProvider from "@/store/index.js";
// @ts-ignore
import Message from "@/components/message.tsx";

describe("Message Component", () => {
  it("should render", () => {
    // TODO: MockStoreProvider
    const { container } = render(
      <StoreProvider>
        <Message message="test" />
      </StoreProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
