interface Props {
  message: String;
}

export default function Message(props: Props) {
  const { message } = props;
  return <div>{message}</div>;
}
