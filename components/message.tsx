import { useContext, useEffect } from "react";
import { ACTION_GET_VALUE, useDispatch, useStore } from "@/store/index.js";

interface Props {
  message: String;
}

export default function Message({ message }: Props) {
  const store = useStore();

  useEffect(() => {
    store.dispatch(ACTION_GET_VALUE);
  }, []);

  return (
    <div>
      <div>{message}</div>
      <div>{store.getters.value}</div>
    </div>
  );
}
