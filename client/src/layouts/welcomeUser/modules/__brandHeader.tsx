import { TbBrandTwitterFilled } from 'react-icons/tb';
import { appName } from '../../../data/constants';

const __brandHeader = (): JSX.Element => {
  return (
    <span className="relative flex items-center justify-start gap-3">
      <TbBrandTwitterFilled className="text-primaryBlue text-4xl" />
      <h1 className="relative text-textGray font-semibold text-3xl">
        {appName}
        <sub className="font-thin text-sm">social</sub>
      </h1>
    </span>
  );
};

export default __brandHeader;
