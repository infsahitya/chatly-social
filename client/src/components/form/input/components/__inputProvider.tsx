import { forwardRef } from 'react';
import { handleInputBlur, handleInputFocus } from '../handlers';

const __inputProvider = forwardRef<HTMLInputElement, InputProviderProps>(
  (props, ref): JSX.Element => {
    const { type, labelRef, wrapperRef } = props;

    return (
      <input
        {...props}
        ref={ref}
        type={type}
        inputMode={
          type === 'email'
            ? 'email'
            : type === 'text'
            ? 'text'
            : type === 'password'
            ? 'text'
            : type === 'number'
            ? 'numeric'
            : 'text'
        }
        onFocus={() => handleInputFocus(labelRef, wrapperRef)}
        onBlur={(e) => handleInputBlur(e, labelRef, wrapperRef)}
        className="relative bg-transparent outline-none text-textGray w-full tracking-wider"
      />
    );
  },
);

export default __inputProvider;
