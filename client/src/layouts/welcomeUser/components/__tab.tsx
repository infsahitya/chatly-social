import { NavLink } from 'react-router-dom';
import { AuthTabProps } from '../../../@types/layouts/welcomeUser';

const __tab = ({ children, to, ...props }: AuthTabProps): JSX.Element => {
  return (
    <NavLink
      {...props}
      to={to}
      className={`relative text-textGray w-[12rem] text-center rounded-xl py-3 z-1`}
    >
      {children}
    </NavLink>
  );
};

export default __tab;
