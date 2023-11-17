import { useEffect, useState } from 'react';
import { Input } from '../../../components/form';
import { RiLockPasswordFill } from 'react-icons/ri';

const __passConfirm = () => {
  const [mount, isMount] = useState<boolean>(false);

  useEffect(() => {
    isMount(true);
  }, []);

  return (
    <div
      className={`relative w-full ${
        mount
          ? 'opacity-0 animate-signupConsumerMount'
          : 'opacity-1 animate-signupConsumerUnmount'
      } flex flex-col items-start justify-center gap-4`}
    >
      <Input
        type="password"
        label="Password"
        name="password"
        id="password"
        required
        icon={<RiLockPasswordFill />}
        sx={{ width: 'w-full' }}
      />

      <Input
        type="password"
        label="Confirm Password"
        name="confirmPassword"
        id="confirmPassword"
        required
        icon={<RiLockPasswordFill />}
        sx={{ width: 'w-full' }}
      />
    </div>
  );
};

export default __passConfirm;
