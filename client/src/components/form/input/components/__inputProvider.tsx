import { forwardRef, useEffect } from "react";
import { handleInputBlur, handleInputFocus } from "../handlers";

const __inputProvider = forwardRef<HTMLInputElement, InputProviderProps>(
  (props, ref): JSX.Element => {
    const { type, labelRef, wrapperRef } = props;

    useEffect(() => {
      if (props.value?.toString()) {
        labelRef.current!.style.transform = "translateY(0)";
        labelRef.current!.style.fontSize = "0.8rem";
      }
    }, []);

    return (
      <input
        {...props}
        ref={ref}
        type={type}
        inputMode={
          type === "email"
            ? "email"
            : type === "text"
            ? "text"
            : type === "number"
            ? "numeric"
            : "text"
        }
        onFocus={() => handleInputFocus(labelRef, wrapperRef)}
        onBlur={(e) => handleInputBlur(e, labelRef, wrapperRef)}
        className="relative bg-transparent outline-none text-textGray w-full tracking-wider"
      />
    );
  },
);

export default __inputProvider;
