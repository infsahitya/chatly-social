import { TbBrandTwitterFilled } from 'react-icons/tb';
import { appName } from '../data/constants';
import { NavLink, Outlet } from 'react-router-dom';

const __brandHeader = (): JSX.Element => {
  return (
    <span className="absolute flex items-center justify-start gap-3 top-0 left-0 m-7">
      <TbBrandTwitterFilled className="text-primaryBlue text-4xl" />
      <h1 className="relative text-textGray font-semibold text-3xl">
        {appName}
        <sub className="font-thin text-sm">social</sub>
      </h1>
    </span>
  );
};

const __tabsWrapper = (): JSX.Element => {
  const __tab = ({ children, to }: AuthTabProps): JSX.Element => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `text-textGray w-[12rem] text-center rounded-xl py-3 ${
            isActive ? 'bg-secondaryDark' : 'bg-transparent'
          }`
        }
      >
        {children}
      </NavLink>
    );
  };

  return (
    <div className="relative flex items-center justify-center gap-2">
      <__tab to={'login'}>Login</__tab>
      <__tab to={'signup'}>Signup</__tab>
    </div>
  );
};

const __welcomeUser = (): JSX.Element => {
  return (
    <div className="relative w-full h-screen bg-primaryDark p-7 flex flex-col items-start justify-center gap-8">
      <__brandHeader />
      <__tabsWrapper />
      <Outlet />
    </div>
  );
};

export default __welcomeUser;
