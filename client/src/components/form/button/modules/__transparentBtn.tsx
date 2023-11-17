import { useEffect, useRef, useState } from 'react';
import { StyledBtnSX } from '.';
import { RippleEffect } from '../utils';
import { Ripple } from '../components';

const __transparentBtn = ({
  children,
  ...props
}: TransparentBtnStyleProps): JSX.Element => {
  const { color, display, margin, textAlign, border, width, bg } = props.sx;

  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [ripple, setRipple] = useState<boolean>(false);

  const btnRef = useRef<HTMLButtonElement>(null!);

  useEffect(() => {
    const btnEl = btnRef.current;

    btnEl.addEventListener('click', (e) =>
      RippleEffect(e, setCoords, setRipple),
    );
    return () => {
      btnEl.removeEventListener('click', (e) =>
        RippleEffect(e, setCoords, setRipple),
      );
    };
  }, []);

  useEffect(() => {
    if (!ripple) setCoords({ x: -1, y: -1 });
  }, [ripple]);

  return (
    <button
      {...props}
      className={`${StyledBtnSX} ${color} ${display} ${margin} ${textAlign} ${border} ${width} ${bg} ${props.className}`}
    >
      {children}
      {ripple ? <Ripple coords={coords} /> : <></>}
    </button>
  );
};

export default __transparentBtn;
