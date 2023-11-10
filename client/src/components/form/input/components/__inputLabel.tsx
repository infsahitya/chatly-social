import { forwardRef } from 'react';

const __inputLabel = forwardRef<HTMLLabelElement, InputLabelProps>(
  (props, ref) => {
    const { label, htmlFor } = props;
    return (
      <label
        ref={ref}
        htmlFor={htmlFor}
        className="relative translate-y-[50%] text-textGray text-opacity-40 text-[1rem] transition-all duration-300 select-none"
      >
        {label}
      </label>
    );
  },
);

export default __inputLabel;
