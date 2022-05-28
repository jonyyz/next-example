import { createContext, useContext, useState } from "react";

const StoreContext = createContext(null);

export function useStore() {
  return useContext(StoreContext);
}

export function useDispatch() {
  const { dispatch } = useStore();
  return dispatch;
}

export const ACTION_GET_VALUE = "GET_VALUE";

export default function Store({ children }) {
  const [value, setValue] = useState(42);
  const store = {
    getters: {
      value,
    },
    mutations: {
      setValue,
    },
    actions: {
      [ACTION_GET_VALUE]() {
        setValue(43);
      },
    },
  };

  store.dispatch = function (action, payload) {
    return store.actions[action](payload);
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}
