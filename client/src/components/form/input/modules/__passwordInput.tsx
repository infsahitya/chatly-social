import { useRef, useState } from "react";
import {
  InnerWrapper,
  InputIcon,
  InputLabel,
  InputProvider,
  ParentWrapper,
} from "../components";
import { Button } from "../..";
import { HiMiniEyeSlash, HiMiniEye } from "react-icons/hi2";

const __passwordInput = ({ ...props }: CustomInputProps): JSX.Element => {
  const { icon, label, sx } = props;

  const [showPass, setShowPass] = useState<boolean>(false);

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
          type={showPass ? "text" : "password"}
          labelRef={labelRef}
          wrapperRef={wrapperRef}
        />
      </InnerWrapper>
      <Button
        category="unstyled"
        onClick={(e) => {
          e.preventDefault();
          setShowPass((curr) => !curr);
        }}
        sx={{ color: "text-textGray" }}
      >
        {showPass ? (
          <HiMiniEyeSlash className="text-gray-400" />
        ) : (
          <HiMiniEye className="text-gray-400" />
        )}
      </Button>
    </ParentWrapper>
  );
};

export default __passwordInput;
