import { useState } from 'react';
import { GoDotFill } from 'react-icons/go';
import { FormActionBtn } from './components';
import { NameEmail, PassConfirm } from './modules';

const userDataConsumer = [NameEmail, PassConfirm];

const __signup = (): JSX.Element => {
  const [consumerRenderCount, setConsumerRenderCount] = useState<number>(0);
  const ActiveConsumer = userDataConsumer[consumerRenderCount];

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
        <ActiveConsumer />

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
    </>
  );
};

export default __signup;
