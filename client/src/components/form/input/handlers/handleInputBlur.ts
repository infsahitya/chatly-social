import { RefObject } from 'react';

export function handleInputBlur(
  e: React.FocusEvent<HTMLInputElement>,
  labelRef: RefObject<HTMLLabelElement>,
  wrapperRef: RefObject<HTMLDivElement>,
) {
  if (!e.target.value) {
    labelRef.current!.style.fontSize = '1rem';
    labelRef.current!.style.transform = 'translateY(50%)';
    wrapperRef.current!.style.outlineColor = 'transparent';
  }
}
