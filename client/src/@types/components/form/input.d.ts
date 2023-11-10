type SXProps = {
  width?: string;
};

interface InputParentWrapperProps {
  children: JSX.Element | JSX.Element[];
  inputRef: RefObject<HTMLInputElement>;
  sx?: SXProps;
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

interface CustomInputProps
  extends Omit<React.ComponentProps<'input'>, 'placeholder'> {
  type: 'text' | 'password' | 'email' | 'number';
  icon: ReactElement<any, any>;
  label: string;
  sx?: SXProps;
}
