interface ButtonCommonSXProps {
  width?: string;
  color?: string;
  margin?: string;
  textAlign?: string;
  display?: string;
}

interface FilledBtnStyleProps extends React.ComponentProps<'button'> {
  variant: 'filled';
  sx: { bg: string } & ButtonCommonSXProps;
  children: React.ReactNode | React.ReactNode[];
}

interface OutlinedBtnStyleProps extends React.ComponentProps<'button'> {
  variant: 'outlined';
  sx: { border: string } & ButtonCommonSXProps;
  children: React.ReactNode | React.ReactNode[];
}

interface TransparentBtnStyleProps extends React.ComponentProps<'button'> {
  variant: 'transparent';
  sx: { border?: string; bg?: string } & ButtonCommonSXProps;
  children: React.ReactNode | React.ReactNode[];
}

type CustomUnstyledButtonProps = {
  category: 'unstyled';
  sx?: {
    bg?: string;
    border?: string;
  } & ButtonCommonSXProps;
  children: React.ReactNode | React.ReactNode[];
} & React.ComponentProps<'button'>;

type CustomStyledButtonProps = (
  | FilledBtnStyleProps
  | OutlinedBtnStyleProps
  | TransparentBtnStyleProps
) & {
  category: 'styled';
};

type CustomButtonProps = CustomStyledButtonProps | CustomUnstyledButtonProps;
