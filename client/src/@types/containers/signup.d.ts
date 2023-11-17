interface SignupDataProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface NameEmailProps {
  state: Pick<SignupDataProps, 'name' | 'email'>;
  stateHandler: React.Dispatch<React.SetStateAction<SignupDataProps>>;
}

interface PassConfirmProps {
  state: Pick<SignupDataProps, 'password' | 'confirmPassword'>;
  stateHandler: React.Dispatch<React.SetStateAction<SignupDataProps>>;
}
