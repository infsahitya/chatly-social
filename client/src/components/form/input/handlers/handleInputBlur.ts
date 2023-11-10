import { RefObject } from 'react';

export function handleInputBlur(
  e: React.FocusEvent<HTMLInputElement>,
  ref: RefObject<HTMLLabelElement>,
) {
  if (!e.target.value) {
    ref.current!.style.fontSize = '1rem';
    ref.current!.style.transform = 'translateY(50%)';
  }
}
