import { cloneElement, useRef } from 'react';
import {
  handleInputBlur,
  handleInputFocus,
  handleWrapperClick,
} from './handlers';

const __input = ({
  icon,
  type,
  label,
  sx,
  ...props
}: CustomInputProps): JSX.Element => {
  const wrapperRef = useRef<HTMLDivElement>(null!);
  const labelRef = useRef<HTMLLabelElement>(null!);
  const inputRef = useRef<HTMLInputElement>(null!);

  return (
    <div
      ref={wrapperRef}
      onClick={() => handleWrapperClick(inputRef)}
      className={`relative ${sx?.width} outline outline-transparent outline-2 h-[3.75rem] px-3 rounded-3xl gap-2 flex items-center justify-start bg-secondaryDark cursor-text transition-all duration-300`}
    >
      {cloneElement(icon, {
        className: 'text-xl text-textGray',
      })}
      <div className="relative flex items-start justify-center flex-col">
        <label
          ref={labelRef}
          htmlFor={props.id}
          className="relative translate-y-[50%] text-textGray text-opacity-40 text-[1rem] transition-all duration-300"
        >
          {label}
        </label>
        <input
          {...props}
          type={type}
          ref={inputRef}
          onFocus={() => handleInputFocus(labelRef, wrapperRef)}
          onBlur={(e) => handleInputBlur(e, labelRef, wrapperRef)}
          className="relative bg-transparent outline-none text-textGray"
        />
      </div>
    </div>
  );
};

export default __input;
