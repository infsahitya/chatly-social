interface CustomUnstyledButtonProps extends React.ComponentProps<'button'> {
  category: 'unstyled';
}

interface CustomStyledButtonProps extends React.ComponentProps<'button'> {
  category: 'styled';
  variant: 'filled' | 'outlined' | 'transparent';
}

type CustomButtonProps = (
  | CustomStyledButtonProps
  | CustomUnstyledButtonProps
) & {
  label: string;
};
