import { cloneElement, useRef } from 'react';
import {
  handleInputBlur,
  handleInputFocus,
  handleWrapperClick,
} from '../handlers';

const __emailInput = ({ ...props }: CustomInputProps): JSX.Element => {
  const { icon, label, sx } = props;
  const wrapperRef = useRef<HTMLDivElement>(null!);
  const labelRef = useRef<HTMLLabelElement>(null!);
  const inputRef = useRef<HTMLInputElement>(null!);

  return (
    <div
      ref={wrapperRef}
      onClick={() => handleWrapperClick(inputRef)}
      className={`relative ${sx?.width} outline outline-transparent outline-[1.5px] h-[3.75rem] px-3 rounded-3xl gap-2 flex items-center justify-start bg-secondaryDark cursor-text transition-all duration-300`}
    >
      {cloneElement(icon, {
        className: 'text-xl text-textGray',
      })}
      <div className="relative flex items-start justify-center flex-col flex-1">
        <label
          ref={labelRef}
          htmlFor={props.id}
          className="relative translate-y-[50%] text-textGray text-opacity-40 text-[1rem] transition-all duration-300"
        >
          {label}
        </label>
        <input
          {...props}
          type="email"
          ref={inputRef}
          inputMode="email"
          onFocus={() => handleInputFocus(labelRef, wrapperRef)}
          onBlur={(e) => handleInputBlur(e, labelRef, wrapperRef)}
          className="relative bg-transparent outline-none text-textGray w-full"
        />
      </div>
    </div>
  );
};

export default __emailInput;