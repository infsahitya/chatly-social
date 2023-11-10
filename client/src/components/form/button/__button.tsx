const __button = ({ label, ...props }: CustomButtonProps): JSX.Element => {
  return <button {...props}>{label}</button>;
};

export default __button;
