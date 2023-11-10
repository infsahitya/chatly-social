import { Outlet } from 'react-router-dom';
import { BrandHeader, TabsWrapper } from './modules';

const __welcomeUser = (): JSX.Element => {
  return (
    <div className="relative w-full h-screen bg-primaryDark p-7 flex flex-col items-start justify-center gap-8">
      <BrandHeader />
      <TabsWrapper />
      <div className="relative w-[24rem] flex flex-col items-start justify-start gap-5">
        <Outlet />
      </div>
    </div>
  );
};

export default __welcomeUser;
