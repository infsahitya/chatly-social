interface CustomInputProps extends React.ComponentProps<'input'> {
  icon: ReactElement<any, any>;
  label: string;
  sx?: {
    width?: string;
  };
}
