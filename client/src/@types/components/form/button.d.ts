interface CustomUnstyledButtonProps {
  category: 'unstyled';
}

interface CustomStyledButtonProps {
  category: 'unstyled';
  variant: 'filled' | 'outlined' | 'transparent';
}

interface CustomButtonProps
  extends React.ComponentProps<'button'>,
    CustomStyledButtonProps,
    CustomUnstyledButtonProps {
  label: string;
}
