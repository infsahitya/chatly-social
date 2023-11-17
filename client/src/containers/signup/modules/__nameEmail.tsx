import { HiUser } from 'react-icons/hi2';
import { Input } from '../../../components/form';
import { handleInputChange } from '../handlers';

const __nameEmail = ({ state, stateHandler }: NameEmailProps) => {
  const { name, email } = state;

  return (
    <div
      className={`relative w-full opacity-0 animate-signupConsumerMount flex flex-col items-start justify-center gap-4`}
    >
      <Input
        type="text"
        label="Name"
        name="name"
        id="name"
        required
        icon={<HiUser />}
        sx={{ width: 'w-full' }}
        value={name}
        onChange={(e) => handleInputChange(e, stateHandler)}
      />

      <Input
        type="email"
        label="Email"
        name="email"
        id="email"
        required
        icon={<span>@</span>}
        sx={{ width: 'w-full' }}
        value={email}
        onChange={(e) => handleInputChange(e, stateHandler)}
      />
    </div>
  );
};

export default __nameEmail;
