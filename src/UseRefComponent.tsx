import { ReactElement, useRef } from "react";

interface Props {}

export default function UseRefComponent({}: Props): ReactElement {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return <input ref={inputRef} />;
}
