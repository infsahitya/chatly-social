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

      <form
        className="relative w-full flex flex-col items-start justify-center gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          type="email"
          label="Email"
          name="email"
          id="email"
          icon={<HiMiniUser />}
          sx={{ width: 'w-full' }}
        />

        <Input
          type="password"
          label="Password"
          name="password"
          id="password"
          icon={<RiLockPasswordFill />}
          sx={{ width: 'w-full' }}
        />
      </form>
    </>
  );
};

export default __login;
