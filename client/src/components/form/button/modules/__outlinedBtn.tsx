import { useEffect, useRef, useState } from 'react';
import { StyledBtnSX } from '.';
import { Ripple } from '../components';
import { RippleEffect } from '../utils';

const __outlinedBtn = ({
  children,
  rippleBg,
  ...props
}: OutlinedBtnStyleProps): JSX.Element => {
  const { color, display, margin, textAlign, border, width } = props.sx;

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
      ref={btnRef}
      className={`${StyledBtnSX} ${color} ${display} ${margin} ${textAlign} ${border} ${width} ${props.className} disabled:cursor-not-allowed disabled:opacity-70`}
    >
      {children}
      {ripple ? <Ripple rippleBg={rippleBg} coords={coords} /> : <></>}
    </button>
  );
};

export default __outlinedBtn;
