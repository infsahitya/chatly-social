interface ButtonCommonSXProps {
  color?: string;
  fontSize?: string;
  margin?: string;
  padding?: string;
  textAlign?: string;
}

interface CustomUnstyledButtonProps extends React.ComponentProps<'button'> {
  category: 'unstyled';
  sx?: {
    bg?: string;
    border?: string;
  } & ButtonCommonSXProps;
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
