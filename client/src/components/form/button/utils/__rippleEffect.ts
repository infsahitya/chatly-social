const __rippleEffect = (
  e: MouseEvent,
  setCoords: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>,
  setRipple: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const rect = (e.target as HTMLElement).getBoundingClientRect();
  setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  setRipple(true);
  setTimeout(() => setRipple(false), 500);
};

export default __rippleEffect;
