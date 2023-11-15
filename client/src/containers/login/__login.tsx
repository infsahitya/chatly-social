import { GoDotFill } from 'react-icons/go';
import { Button, Input } from '../../components/form';
import { HiUser } from 'react-icons/hi2';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const __login = (): JSX.Element => {
  return (
    <>
      <h1 className="text-textGray font-bold text-4xl select-none">
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
          required
          icon={<HiUser />}
          sx={{ width: 'w-full' }}
        />

        <Input
          type="password"
          label="Password"
          name="password"
          id="password"
          required
          icon={<RiLockPasswordFill />}
          sx={{ width: 'w-full' }}
        />

        <Link
          to={'/forgot-password'}
          className="text-primaryBlue text-sm hover:underline ml-2"
        >
          Forgot Password?
        </Link>

        <Button
          label={'Login'}
          category="styled"
          variant="filled"
          sx={{
            bg: 'bg-primaryBlue',
            color: 'text-textGray',
            width: 'w-[10rem]',
            display: 'self-center',
          }}
        />
      </form>
    </>
  );
};

export default __login;
