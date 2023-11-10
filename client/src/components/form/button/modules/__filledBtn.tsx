const __filledBtn = ({ ...props }: CustomButtonProps): JSX.Element => {
  return (
    <button
      {...props}
      className={`${props.sx?.color} ${props.sx?.fontSize} ${props.sx?.margin}`}
    >
      {props.label}
    </button>
  );
};

export default __filledBtn;
