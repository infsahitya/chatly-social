import { TbBrandTwitterFilled } from 'react-icons/tb';
import { GoDotFill } from 'react-icons/go';
import { appName } from '../../data/constants';

const __login = (): JSX.Element => {
  return (
    <div className="relative w-full h-screen bg-primaryDark p-7 flex items-center justify-start">
      <span className="absolute flex items-center justify-start gap-3 top-0 left-0 m-7">
        <TbBrandTwitterFilled className="text-primaryBlue text-4xl" />
        <h1 className="relative text-textGray font-semibold text-3xl">
          {appName}
          <sub className="font-thin text-sm">social</sub>
        </h1>
      </span>

      <h1 className="text-textGray font-bold text-4xl">
        Create new account
        <GoDotFill className="text-primaryBlue text-xl inline align-bottom" />
      </h1>
    </div>
  );
};

export default __login;
