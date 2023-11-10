import { useRef } from 'react';
import { handleInputBlur, handleInputFocus } from '../handlers';
import {
  InnerWrapper,
  InputIcon,
  InputLabel,
  ParentWrapper,
} from '../components';
// import { HiMiniEyeSlash, HiMiniEye } from 'react-icons/hi2';

const __passwordInput = ({ ...props }: CustomInputProps): JSX.Element => {
  const { icon, label, sx } = props;
  const wrapperRef = useRef<HTMLDivElement>(null!);
  const labelRef = useRef<HTMLLabelElement>(null!);
  const inputRef = useRef<HTMLInputElement>(null!);

  return (
    <ParentWrapper ref={wrapperRef} inputRef={inputRef} sx={sx}>
      <InputIcon icon={icon} />
      <InnerWrapper>
        <InputLabel ref={labelRef} label={label} htmlFor={props.id} />
        <input
          {...props}
          type="password"
          ref={inputRef}
          inputMode="text"
          onFocus={() => handleInputFocus(labelRef, wrapperRef)}
          onBlur={(e) => handleInputBlur(e, labelRef, wrapperRef)}
          className="relative bg-transparent outline-none text-textGray w-full"
        />
      </InnerWrapper>
    </ParentWrapper>
  );
};

export default __passwordInput;
