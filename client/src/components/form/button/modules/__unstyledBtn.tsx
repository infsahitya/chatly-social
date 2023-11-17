const __unstyledBtn = ({
  children,
  ...props
}: CustomUnstyledButtonProps): JSX.Element => {
  return (
    <button
      {...props}
      className={`${props.sx?.width} ${props.sx?.color} ${props.sx?.margin} ${props.sx?.textAlign} ${props.sx?.display} ${props.sx?.bg} ${props.sx?.border} disabled:cursor-not-allowed disabled:opacity-70`}
    >
      {children}
    </button>
  );
};

export default __unstyledBtn;
