import { useEffect, useRef, useState } from 'react';
import { StyledBtnSX } from '.';
import { RippleEffect } from '../utils';
import { Ripple } from '../components';

const __filledBtn = ({ ...props }: FilledBtnStyleProps): JSX.Element => {
  const { label } = props;
  const { color, display, margin, textAlign, bg, width } = props.sx;

  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [ripple, setRipple] = useState<boolean>(false);

  const btnRef = useRef<HTMLButtonElement>(null!);

  useEffect(() => {
    btnRef.current.addEventListener('click', (e) =>
      RippleEffect(e, setCoords, setRipple),
    );
    return () => {
      btnRef.current.removeEventListener('click', (e) =>
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
      className={`${StyledBtnSX} ${color} ${display} ${margin} ${textAlign} ${bg} ${width}`}
    >
      <span className="relative block z-10">{label}</span>
      {ripple ? <Ripple coords={coords} /> : <></>}
    </button>
  );
};

export default __filledBtn;
