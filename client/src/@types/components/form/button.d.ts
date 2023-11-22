type RippleBG = "white" | "gray";

interface RippleElProps {
  rippleBg: RippleBG;
  coords: { x: number; y: number };
}

interface ButtonCommonSXProps {
  width?: string;
  color?: string;
  margin?: string;
  textAlign?: string;
  display?: string;
}

interface ButtonCommonProps {
  rippleBg: RippleBG;
  children: React.ReactNode | React.ReactNode[];
}

interface FilledBtnStyleProps
  extends React.ComponentProps<"button">,
    ButtonCommonProps {
  variant: "filled";
  sx: { bg: string } & ButtonCommonSXProps;
}

interface OutlinedBtnStyleProps
  extends React.ComponentProps<"button">,
    ButtonCommonProps {
  variant: "outlined";
  sx: { border: string } & ButtonCommonSXProps;
}

interface TransparentBtnStyleProps
  extends React.ComponentProps<"button">,
    ButtonCommonProps {
  variant: "transparent";
  sx: { border?: string; bg?: string } & ButtonCommonSXProps;
}

interface CustomUnstyledButtonProps
  extends React.ComponentProps<"button">,
    Omit<ButtonCommonProps, "rippleBg"> {
  category: "unstyled";
  sx?: {
    bg?: string;
    border?: string;
  } & ButtonCommonSXProps;
}

type CustomStyledButtonProps = (
  | FilledBtnStyleProps
  | OutlinedBtnStyleProps
  | TransparentBtnStyleProps
) & {
  category: "styled";
};

type CustomButtonProps = CustomStyledButtonProps | CustomUnstyledButtonProps;
