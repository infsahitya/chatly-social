import { GoDotFill } from 'react-icons/go';
import { Input } from '../../components/form';
import { HiMiniUser } from 'react-icons/hi2';

const __login = (): JSX.Element => {
  return (
    <>
      <h1 className="text-textGray font-bold text-4xl">
        Login to your account
        <GoDotFill className="text-primaryBlue text-lg inline align-bottom" />
      </h1>

      <Input
        type="email"
        label="Email"
        icon={<HiMiniUser />}
        sx={{ width: 'w-full' }}
      />
    </>
  );
};

export default __login;
