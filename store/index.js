import { createContext, useState } from "react";

export const StoreContext = createContext({});

export default ({ children }) => {
  const [value, setValue] = useState(42);
  const store = {
    value: [value, setValue],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
