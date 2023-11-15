import { useEffect, useRef, useState } from 'react';
import { StyledBtnSX } from '.';

const Ripple = ({
  coords,
}: {
  coords: { x: number; y: number };
}): JSX.Element => {
  return (
    <span
      style={{ left: coords.x, top: coords.y }}
      className="absolute rounded-full w-[5px] h-[5px] bg-transparent animate-button_ripple"
    />
  );
};

const __filledBtn = ({ ...props }: FilledBtnStyleProps): JSX.Element => {
  const { label } = props;
  const { color, display, margin, textAlign, bg, width } = props.sx;

  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [ripple, setRipple] = useState<boolean>(false);

  const btnRef = useRef<HTMLButtonElement>(null!);

  useEffect(() => {
    btnRef.current.addEventListener('click', (e) => {
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      setRipple(true);
      setTimeout(() => setRipple(false), 300);
    });
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
