import { render } from "@testing-library/react";
import StoreProvider from "@/store/index.js";
// @ts-ignore
import Counter from "@/components/counter.tsx";

describe("Counter Component", () => {
  it("should render", () => {
    // TODO: MockStoreProvider
    const { container } = render(
      <StoreProvider>
        <Counter message="test" />
      </StoreProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
