import { memo } from "react";

interface Props {
  text: String;
}

export default memo(function Message({ text }: Props) {
  return <div>Message: {text}</div>;
});
