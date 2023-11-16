import { Input } from '../../../components/form';
import { RiLockPasswordFill } from 'react-icons/ri';

const __passConfirm = () => {
  return (
    <>
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
    </>
  );
};

export default __passConfirm;
