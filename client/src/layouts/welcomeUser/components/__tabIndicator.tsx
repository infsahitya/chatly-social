import { forwardRef } from 'react';

interface TabIndicatorProps {}

const __tabIndicator = forwardRef<HTMLSpanElement, TabIndicatorProps>(
  (props, ref): JSX.Element => {
    console.log(props);
    return (
      <span
        ref={ref}
        className="absolute left-0 w-[12rem] z-0 rounded-xl h-full bg-secondaryDark transition-all duration-500"
      />
    );
  },
);

export default __tabIndicator;
