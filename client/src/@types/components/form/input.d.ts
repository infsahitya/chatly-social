interface CustomInputProps
  extends Omit<React.ComponentProps<'input'>, 'placeholder'> {
  type: 'text' | 'password' | 'email' | 'number';
  icon: ReactElement<any, any>;
  label: string;
  sx?: {
    width?: string;
  };
}
