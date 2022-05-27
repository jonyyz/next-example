import { createContext, useContext, useState } from "react";

const StoreContext = createContext(null);

export function useStore() {
  return useContext(StoreContext);
}

export default function Store({ children }) {
  const [value, setValue] = useState(42);
  const store = {
    value: [value, setValue],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}
