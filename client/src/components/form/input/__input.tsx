import { cloneElement, useRef } from 'react';
import { handleInputBlur, handleInputFocus } from './handlers';

const __input = ({
  type,
  label,
  icon,
  ...props
}: CustomInputProps): JSX.Element => {
  const labelRef = useRef<HTMLLabelElement>(null!);

  return (
    <div className="relative h-[3.75rem] px-3 rounded-3xl gap-2 flex items-center justify-start bg-secondaryDark ">
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
          onFocus={() => handleInputFocus(labelRef)}
          onBlur={(e) => handleInputBlur(e, labelRef)}
          className="relative bg-transparent outline-none text-textGray"
        />
      </div>
    </div>
  );
};

export default __input;
