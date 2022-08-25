import { useEffect } from "react";
import { ACTION_GET_VALUE, useDispatch, useStore } from "@/store/index.js";

export default function Counter() {
  const dispatch = useDispatch();
  const store = useStore();

  useEffect(() => {
    dispatch(ACTION_GET_VALUE);
  }, [dispatch]);

  return <div>Counter: {store.getters.value}</div>;
}
