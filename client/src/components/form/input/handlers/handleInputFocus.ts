import { RefObject } from 'react';

export function handleInputFocus(ref: RefObject<HTMLLabelElement>) {
  ref.current!.style.fontSize = '0.8rem';
  ref.current!.style.transform = 'translateY(0)';
}
