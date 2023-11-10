import { useRef } from 'react';
import {
  InnerWrapper,
  InputIcon,
  InputLabel,
  InputProvider,
  ParentWrapper,
} from '../components';

const __textInput = ({ ...props }: CustomInputProps): JSX.Element => {
  const { icon, label, sx } = props;
  const wrapperRef = useRef<HTMLDivElement>(null!);
  const labelRef = useRef<HTMLLabelElement>(null!);
  const inputRef = useRef<HTMLInputElement>(null!);

  return (
    <ParentWrapper ref={wrapperRef} inputRef={inputRef} sx={sx}>
      <InputIcon icon={icon} />
      <InnerWrapper>
        <InputLabel ref={labelRef} label={label} htmlFor={props.id} />
        <InputProvider
          {...props}
          ref={inputRef}
          type="text"
          labelRef={labelRef}
          wrapperRef={wrapperRef}
        />
      </InnerWrapper>
    </ParentWrapper>
  );
};

export default __textInput;
