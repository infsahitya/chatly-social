interface ButtonCommonSXProps {
  width?: string;
  color?: string;
  margin?: string;
  textAlign?: string;
  display?: string;
}

interface FilledBtnStyleProps extends React.ComponentProps<'button'> {
  label: React.ReactNode;
  variant: 'filled';
  sx: { bg: string } & ButtonCommonSXProps;
}

interface OutlinedBtnStyleProps extends React.ComponentProps<'button'> {
  label: React.ReactNode;
  variant: 'outlined';
  sx: { border: string } & ButtonCommonSXProps;
}

interface TransparentBtnStyleProps extends React.ComponentProps<'button'> {
  label: React.ReactNode;
  variant: 'transparent';
  sx: { border?: string; bg?: string } & ButtonCommonSXProps;
}

type CustomUnstyledButtonProps = {
  category: 'unstyled';
  label: React.ReactNode;
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
};

type CustomButtonProps = CustomStyledButtonProps | CustomUnstyledButtonProps;
