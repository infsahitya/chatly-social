const __ripple = ({
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

export default __ripple;
