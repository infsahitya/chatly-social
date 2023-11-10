interface ButtonSXProps {
  color?: string;
  fontSize?: string;
}

interface CustomUnstyledButtonProps extends React.ComponentProps<'button'> {
  category: 'unstyled';
  sx?: ButtonSXProps;
}

interface CustomStyledButtonProps extends React.ComponentProps<'button'> {
  category: 'styled';
  variant: 'filled' | 'outlined' | 'transparent';
  sx?: ButtonSXProps;
}

type CustomButtonProps = (
  | CustomStyledButtonProps
  | CustomUnstyledButtonProps
) & {
  label: React.ReactNode;
};
