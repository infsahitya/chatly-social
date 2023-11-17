const __unstyledBtn = ({
  children,
  ...props
}: CustomButtonProps): JSX.Element => {
  return (
    <button {...props} className={`${props.sx?.color}`}>
      {children}
    </button>
  );
};

export default __unstyledBtn;
