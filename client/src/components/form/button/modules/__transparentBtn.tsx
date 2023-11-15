const __transparentBtn = ({ ...props }: CustomButtonProps): JSX.Element => {
  return (
    <button {...props} className={`${props.sx?.color} ${props.sx?.margin}`}>
      {props.label}
    </button>
  );
};

export default __transparentBtn;
