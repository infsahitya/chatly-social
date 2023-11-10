const __unstyledBtn = ({ ...props }: CustomButtonProps): JSX.Element => {
  return <button {...props}>{props.label}</button>;
};

export default __unstyledBtn;
