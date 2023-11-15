import { StyledBtnSX } from '.';

const __transparentBtn = ({
  ...props
}: TransparentBtnStyleProps): JSX.Element => {
  const { label } = props;
  const { color, display, margin, textAlign, border, width, bg } = props.sx;

  return (
    <button
      {...props}
      className={`${StyledBtnSX} ${color} ${display} ${margin} ${textAlign} ${border} ${width} ${bg}`}
    >
      {label}
    </button>
  );
};

export default __transparentBtn;
