import { EmailInput, TextInput } from './modules';

const __input = ({ ...props }: CustomInputProps): JSX.Element => {
  switch (props.type) {
    case 'text':
      return <TextInput {...props} />;
    case 'email':
      return <EmailInput {...props} />;
    default:
      return <TextInput {...props} />;
  }
};

export default __input;
