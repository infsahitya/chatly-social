import { RefObject } from "react";

export function handleWrapperClick(inputRef: RefObject<HTMLInputElement>) {
  inputRef.current!.focus();
}
