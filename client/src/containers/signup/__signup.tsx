import { GoDotFill } from 'react-icons/go';
import { Button } from '../../components/form';
import { FaArrowRight } from 'react-icons/fa';
import { NameEmail, PassConfirm } from './modules';
import { useRef } from 'react';

const userDataConsumer: JSX.Element[] = [<NameEmail />, <PassConfirm />];

const __signup = (): JSX.Element => {
  const consumerRenderCount = useRef<number>(0);

  return (
    <>
      <h1 className="text-textGray font-bold text-4xl">
        Create your account
        <GoDotFill className="text-primaryBlue text-lg inline align-bottom" />
      </h1>

      <form
        className="relative w-full flex flex-col items-start justify-center gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        {userDataConsumer[consumerRenderCount.current]}

        <Button
          label={
            <>
              <span>Next</span>
              <FaArrowRight className="translate-x-2 group-hover:translate-x-3 text-sm transition-all duration-300" />
            </>
          }
          category="styled"
          variant="filled"
          sx={{
            bg: 'bg-primaryBlue',
            color: 'text-textGray',
            width: 'w-[10rem]',
            display: 'flex items-center justify-center self-center',
          }}
          className="group"
        />
      </form>
    </>
  );
};

export default __signup;
