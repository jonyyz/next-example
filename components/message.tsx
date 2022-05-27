import { useContext } from "react";
import { StoreContext } from "@/store/index.js";

interface Props {
  message: String;
}

export default function Message(props: Props) {
  const { value } = useContext(StoreContext);
  const { message } = props;
  return (
    <div>
      <div>{message}</div>
      <div>{value}</div>
    </div>
  );
}
