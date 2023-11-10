import { useRef } from 'react';
import { handleInputBlur, handleInputFocus } from '../handlers';
import { InnerWrapper, InputIcon, ParentWrapper } from '../components';

const __emailInput = ({ ...props }: CustomInputProps): JSX.Element => {
  const { icon, label, sx } = props;
  const wrapperRef = useRef<HTMLDivElement>(null!);
  const labelRef = useRef<HTMLLabelElement>(null!);
  const inputRef = useRef<HTMLInputElement>(null!);

  return (
    <ParentWrapper ref={wrapperRef} inputRef={inputRef} sx={sx}>
      <InputIcon icon={icon} />
      <InnerWrapper>
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
      </InnerWrapper>
    </ParentWrapper>
  );
};

export default __emailInput;
