type InputSXProps = {
  width?: string;
};

interface InputParentWrapperProps {
  children: JSX.Element | JSX.Element[];
  inputRef: React.MutableRefObject<HTMLInputElement>;
  sx?: InputSXProps;
}

interface InputIconProps {
  icon: ReactElement<any, any>;
}

interface InputInnerWrapperProps {
  children: JSX.Element | JSX.Element[];
}

interface InputLabelProps {
  htmlFor: string | undefined;
  label: string;
}

interface InputProviderProps extends CustomInputProps {
  labelRef: React.MutableRefObject<HTMLLabelElement>;
  wrapperRef: React.MutableRefObject<HTMLDivElement>;
  type: CustomInputProps['type'];
}

interface CustomInputProps
  extends Omit<React.ComponentProps<'input'>, 'placeholder'> {
  type: 'text' | 'password' | 'email' | 'number';
  icon: ReactElement<any, any>;
  label: string;
  sx?: InputSXProps;
}
