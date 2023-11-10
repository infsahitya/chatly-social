import { forwardRef } from 'react';
import { handleWrapperClick } from '../handlers';

const __parentWrapper = forwardRef<HTMLDivElement, InputParentWrapperProps>(
  (props, ref) => {
    const { inputRef, children, sx } = props;

    return (
      <div
        ref={ref}
        onClick={() => handleWrapperClick(inputRef)}
        className={`relative ${sx?.width} outline outline-transparent outline-[1.5px] h-[3.75rem] px-3 rounded-3xl gap-2 flex items-center justify-start bg-secondaryDark cursor-text transition-all duration-300`}
      >
        {children}
      </div>
    );
  },
);

export default __parentWrapper;
