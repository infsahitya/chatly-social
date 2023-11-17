import { useState } from 'react';
import { GoDotFill } from 'react-icons/go';
import { FormActionBtn } from './components';
import { NameEmail, PassConfirm } from './modules';
import { Button } from '../../components/form';
import { FcGoogle } from 'react-icons/fc';

const userDataConsumer = [NameEmail, PassConfirm] as const;

const __signup = (): JSX.Element => {
  const [consumerRenderCount, setConsumerRenderCount] = useState<number>(0);
  const [signupData, setSignupData] = useState<SignupDataProps>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  return (
    <>
      <h1 className="text-textGray font-bold text-4xl">
        Create your account
        <GoDotFill className="text-primaryBlue text-lg inline align-bottom" />
      </h1>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative w-full flex flex-col items-start justify-center gap-4"
      >
        {consumerRenderCount === 0 ? (
          <NameEmail
            state={{ name: signupData.name, email: signupData.email }}
            stateHandler={setSignupData}
          />
        ) : (
          <PassConfirm
            state={{
              password: signupData.password,
              confirmPassword: signupData.confirmPassword,
            }}
            stateHandler={setSignupData}
          />
        )}

        <div className="relative w-full flex items-center justify-between gap-5">
          <FormActionBtn
            action="previous"
            userDataConsumerLength={userDataConsumer.length}
            renderCount={{
              state: consumerRenderCount,
              stateHandler: setConsumerRenderCount,
            }}
          />
          <FormActionBtn
            action="next"
            userDataConsumerLength={userDataConsumer.length}
            renderCount={{
              state: consumerRenderCount,
              stateHandler: setConsumerRenderCount,
            }}
          />
        </div>
      </form>

      <span className="relative w-full flex items-center justify-center">
        <hr className="relative h-[1px] w-full bg-focusGray border-none rounded-full" />
        <span className="absolute text-focusGray bg-primaryDark px-2 select-none">
          OR
        </span>
      </span>

      <Button
        category="styled"
        variant="filled"
        rippleBg="gray"
        sx={{
          bg: 'bg-white',
          color: 'text-black',
          width: 'w-[10rem]',
          display: 'flex justify-center items-center self-center gap-3',
        }}
      >
        <FcGoogle className="text-2xl" /> Continue
      </Button>
    </>
  );
};

export default __signup;
