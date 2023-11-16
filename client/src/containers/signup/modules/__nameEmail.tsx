import { HiUser } from 'react-icons/hi2';
import { Input } from '../../../components/form';

const __nameEmail = () => {
  return (
    <>
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
    </>
  );
};

export default __nameEmail;
