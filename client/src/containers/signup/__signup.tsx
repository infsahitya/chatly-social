import { GoDotFill } from 'react-icons/go';
import { Button } from '../../components/form';
import { FaArrowRight } from 'react-icons/fa';
import { NameEmail, PassConfirm } from './modules';
import { useState } from 'react';
import { handleConsumers } from './handlers';

const userDataConsumer: JSX.Element[] = [<NameEmail />, <PassConfirm />];

const __signup = (): JSX.Element => {
  const [consumerRenderCount, setConsumerRenderCount] = useState<number>(0);

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
        {userDataConsumer[consumerRenderCount]}

        <Button
          label={
            <>
              <span>Next</span>
              <FaArrowRight className="translate-x-2 group-hover:translate-x-3 text-sm transition-all duration-300" />
            </>
          }
          category="styled"
          variant="filled"
          className="group"
          sx={{
            bg: 'bg-primaryBlue',
            color: 'text-textGray',
            width: 'w-[10rem]',
            display: 'flex items-center justify-center self-center',
          }}
          onClick={() =>
            handleConsumers('next', userDataConsumer.length, {
              state: consumerRenderCount,
              stateHandler: setConsumerRenderCount,
            })
          }
        />
      </form>
    </>
  );
};

export default __signup;
