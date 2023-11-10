import { Tab } from '../components';

const __tabsWrapper = (): JSX.Element => {
  return (
    <div className="relative flex items-center justify-center">
      <Tab to={'login'}>Login</Tab>
      <Tab to={'signup'}>Signup</Tab>
    </div>
  );
};

export default __tabsWrapper;
