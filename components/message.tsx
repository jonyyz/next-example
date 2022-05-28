import { useEffect } from "react";
import { ACTION_GET_VALUE, useDispatch, useStore } from "@/store/index.js";

interface Props {
  message: String;
}

export default function Message({ message }: Props) {
  const dispatch = useDispatch();
  const store = useStore();

  useEffect(() => {
    dispatch(ACTION_GET_VALUE);
  }, [dispatch]);

  return (
    <div>
      <div>{message}</div>
      <div>{store.getters.value}</div>
    </div>
  );
}
