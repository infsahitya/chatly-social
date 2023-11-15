interface ButtonCommonSXProps {
  color?: string;
  margin?: string;
  textAlign?: string;
  display?: string;
}

interface FilledBtnStyleProps {
  variant: 'filled';
  sx: { bg: string } & ButtonCommonSXProps;
}

interface OutlinedBtnStyleProps {
  variant: 'outlined';
  sx?: { border?: string } & ButtonCommonSXProps;
}

interface TransparentBtnStyleProps {
  variant: 'transparent';
  sx?: { border?: string; bg?: string } & ButtonCommonSXProps;
}

type CustomUnstyledButtonProps = {
  category: 'unstyled';
  sx?: {
    bg?: string;
    border?: string;
  } & ButtonCommonSXProps;
} & React.ComponentProps<'button'>;

type CustomStyledButtonProps = (
  | FilledBtnStyleProps
  | OutlinedBtnStyleProps
  | TransparentBtnStyleProps
) & {
  category: 'styled';
} & React.ComponentProps<'button'>;

type CustomButtonProps = (
  | CustomStyledButtonProps
  | CustomUnstyledButtonProps
) & {
  label: React.ReactNode;
};
