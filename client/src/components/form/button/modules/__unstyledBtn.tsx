const __unstyledBtn = ({ ...props }: CustomButtonProps): JSX.Element => {
  return (
    <button {...props} className={`${props.sx?.color}`}>
      {props.label}
    </button>
  );
};

export default __unstyledBtn;
