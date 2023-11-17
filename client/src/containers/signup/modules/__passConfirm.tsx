import { Input } from '../../../components/form';
import { RiLockPasswordFill } from 'react-icons/ri';
import { handleInputChange } from '../handlers';

const __passConfirm = ({ state, stateHandler }: PassConfirmProps) => {
  const { password, confirmPassword } = state;

  return (
    <div
      className={`relative w-full opacity-0 animate-signupConsumerMount flex flex-col items-start justify-center gap-4`}
    >
      <Input
        type="password"
        label="Password"
        name="password"
        id="password"
        required
        icon={<RiLockPasswordFill />}
        sx={{ width: 'w-full' }}
        value={password}
        onChange={(e) => handleInputChange(e, stateHandler)}
      />

      <Input
        type="password"
        label="Confirm Password"
        name="confirmPassword"
        id="confirmPassword"
        required
        icon={<RiLockPasswordFill />}
        sx={{ width: 'w-full' }}
        value={confirmPassword}
        onChange={(e) => handleInputChange(e, stateHandler)}
      />
    </div>
  );
};

export default __passConfirm;
