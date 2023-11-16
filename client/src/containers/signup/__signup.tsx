import { GoDotFill } from 'react-icons/go';
import { Button } from '../../components/form';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { NameEmail, PassConfirm } from './modules';
import { useRef, useState } from 'react';
import { handleConsumers } from './handlers';

const __signup = (): JSX.Element => {
  const [consumerRenderCount, setConsumerRenderCount] = useState<number>(0);
  const userDataConsumer = useRef<JSX.Element[]>([
    <NameEmail />,
    <PassConfirm />,
  ]);

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
        {userDataConsumer.current[consumerRenderCount]}

        <div className="relative w-full flex items-center justify-between gap-5">
          <Button
            label={
              <>
                <FaArrowLeft className="translate-x-[-2] group-hover:translate-x-[-3] text-sm transition-all duration-300" />
                <span>Back</span>
              </>
            }
            category="styled"
            variant="filled"
            className="group"
            sx={{
              bg: 'bg-focusGray',
              color: 'text-textGray',
              width: 'w-[50%]',
              display: 'flex items-center justify-center self-center',
            }}
            onClick={(e) =>
              handleConsumers(e, 'previous', userDataConsumer.current.length, {
                state: consumerRenderCount,
                stateHandler: setConsumerRenderCount,
              })
            }
          />

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
              width: 'w-[50%]',
              display: 'flex items-center justify-center self-center',
            }}
            onClick={(e) =>
              handleConsumers(e, 'next', userDataConsumer.current.length, {
                state: consumerRenderCount,
                stateHandler: setConsumerRenderCount,
              })
            }
          />
        </div>
      </form>
    </>
  );
};

export default __signup;
