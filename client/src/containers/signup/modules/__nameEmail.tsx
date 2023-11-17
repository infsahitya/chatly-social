import { HiUser } from 'react-icons/hi2';
import { Input } from '../../../components/form';
import { useEffect, useState } from 'react';

const __nameEmail = () => {
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
        type="text"
        label="Name"
        name="name"
        id="name"
        required
        icon={<HiUser />}
        sx={{ width: 'w-full' }}
      />

      <Input
        type="email"
        label="Email"
        name="email"
        id="email"
        required
        icon={<span>@</span>}
        sx={{ width: 'w-full' }}
      />
    </div>
  );
};

export default __nameEmail;
