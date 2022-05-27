import { useContext } from "react";
import { useStore } from "@/store/index.js";

interface Props {
  message: String;
}

export default function Message({ message }: Props) {
  const {
    value: [value],
  } = useStore();
  return (
    <div>
      <div>{message}</div>
      <div>{value}</div>
    </div>
  );
}
