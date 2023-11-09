import { NavLink } from 'react-router-dom';

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

export default __tab;
