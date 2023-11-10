const __innerWrapper = ({ children }: InputInnerWrapperProps): JSX.Element => {
  return (
    <div className="relative flex items-start justify-center flex-col flex-1">
      {children}
    </div>
  );
};

export default __innerWrapper;
