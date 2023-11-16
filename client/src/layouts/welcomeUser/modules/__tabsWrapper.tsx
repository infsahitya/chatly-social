import { useRef } from 'react';
import { Tab, TabIndicator } from '../components';
import { handleTabIndicator } from '../handlers';

const __tabsWrapper = (): JSX.Element => {
  const indicatorRef = useRef<HTMLSpanElement>(null!);

  return (
    <div className="relative flex items-center justify-center">
      <Tab to={'login'} onClick={(e) => handleTabIndicator(e, indicatorRef)}>
        Login
      </Tab>
      <Tab to={'signup'} onClick={(e) => handleTabIndicator(e, indicatorRef)}>
        Signup
      </Tab>
      <TabIndicator ref={indicatorRef} />
    </div>
  );
};

export default __tabsWrapper;
