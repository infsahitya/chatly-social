const __ripple = ({ coords, rippleBg }: RippleElProps): JSX.Element => {
  return (
    <span
      style={{ left: coords.x, top: coords.y }}
      className={`absolute rounded-full w-[5px] h-[5px] ${
        rippleBg === 'white' ? 'bg-white' : 'bg-gray-400'
      } animate-button_ripple`}
    />
  );
};

export default __ripple;
