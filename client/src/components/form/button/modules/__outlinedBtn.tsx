const __outlinedBtn = ({ ...props }: CustomButtonProps): JSX.Element => {
  return (
    <button {...props} className={`${props.sx?.color} ${props.sx?.margin}`}>
      {props.label}
    </button>
  );
};

export default __outlinedBtn;
