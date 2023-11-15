import { StyledBtnSX } from '.';

const __outlinedBtn = ({ ...props }: OutlinedBtnStyleProps): JSX.Element => {
  const { label } = props;
  const { color, display, margin, textAlign, border, width } = props.sx;

  return (
    <button
      {...props}
      className={`${StyledBtnSX} ${color} ${display} ${margin} ${textAlign} ${border} ${width}`}
    >
      {label}
    </button>
  );
};

export default __outlinedBtn;
