import { TbBrandTwitterFilled } from 'react-icons/tb';
import { appName } from '../../../data/constants';

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

export default __brandHeader;
