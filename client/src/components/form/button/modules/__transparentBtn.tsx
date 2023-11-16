import { useEffect, useRef, useState } from 'react';
import { StyledBtnSX } from '.';
import { RippleEffect } from '../utils';
import { Ripple } from '../components';

const __transparentBtn = ({
  ...props
}: TransparentBtnStyleProps): JSX.Element => {
  const { label } = props;
  const { color, display, margin, textAlign, border, width, bg } = props.sx;

  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [ripple, setRipple] = useState<boolean>(false);

  const btnRef = useRef<HTMLButtonElement>(null!);

  useEffect(() => {
    btnRef.current.addEventListener('click', (e) =>
      RippleEffect(e, setCoords, setRipple),
    );
    return () => {
      // eslint-disable-next-line
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
      className={`${StyledBtnSX} ${color} ${display} ${margin} ${textAlign} ${border} ${width} ${bg}`}
    >
      <span className="relative block z-10">{label}</span>
      {ripple ? <Ripple coords={coords} /> : <></>}
    </button>
  );
};

export default __transparentBtn;
