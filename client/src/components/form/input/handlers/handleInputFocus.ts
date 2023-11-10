import { RefObject } from 'react';
import { primaryBlue } from '../../../../data/constants';

export function handleInputFocus(
  labelRef: RefObject<HTMLLabelElement>,
  wrapperRef: RefObject<HTMLDivElement>,
) {
  labelRef.current!.style.fontSize = '0.8rem';
  labelRef.current!.style.transform = 'translateY(0)';
  wrapperRef.current!.style.outlineColor = primaryBlue;
}
