import { useContext } from "react";
import { useStore } from "@/store/index.js";

interface Props {
  message: String;
}

export default function Message(props: Props) {
  const { value } = useStore();
  const { message } = props;
  return (
    <div>
      <div>{message}</div>
      <div>{value}</div>
    </div>
  );
}
