import { GoDotFill } from 'react-icons/go';
import { Input } from '../../components/form';
import { HiMiniUser } from 'react-icons/hi2';
import { RiLockPasswordFill } from 'react-icons/ri';

const __login = (): JSX.Element => {
  return (
    <>
      <h1 className="text-textGray font-bold text-4xl">
        Login to your account
        <GoDotFill className="text-primaryBlue text-lg inline align-bottom" />
      </h1>

      <form className="relative w-full flex flex-col items-start justify-center gap-4">
        <Input
          type="email"
          label="Email"
          icon={<HiMiniUser />}
          sx={{ width: 'w-full' }}
        />

        <Input
          type="password"
          label="Password"
          icon={<RiLockPasswordFill />}
          sx={{ width: 'w-full' }}
        />
      </form>
    </>
  );
};

export default __login;
