import { Outlet } from 'react-router-dom';
import { BrandHeader, TabsWrapper } from './modules';

const __welcomeUser = (): JSX.Element => {
  return (
    <div className="relative w-full h-screen bg-primaryDark p-7 flex-col flex items-start justify-start gap-5">
      {/* <div className="absolute top-0 left-0 m-7 flex flex-col items-start justify-center gap-5"> */}
      <BrandHeader />
      <TabsWrapper />
      {/* </div> */}
      <div className="relative w-[24rem] flex flex-col items-start justify-start gap-5">
        <Outlet />
      </div>
    </div>
  );
};

export default __welcomeUser;
