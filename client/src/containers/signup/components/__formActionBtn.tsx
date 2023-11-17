import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { handleConsumer } from '../handlers';
import { Button } from '../../../components/form';

const __formActionBtn = ({
  action,
  userDataConsumerLength,
  renderCount,
}: {
  action: 'next' | 'previous';
  userDataConsumerLength: number;
  renderCount: {
    state: number;
    stateHandler: React.Dispatch<React.SetStateAction<number>>;
  };
}): JSX.Element => {
  return (
    <Button
      category="styled"
      variant="filled"
      className="group"
      sx={{
        bg: action === 'previous' ? 'bg-focusGray' : 'bg-primaryBlue',
        color: 'text-textGray',
        width: 'w-[50%]',
        display: 'flex items-center justify-center',
      }}
      disabled={
        action === 'previous'
          ? renderCount.state === 0
          : renderCount.state === userDataConsumerLength - 1
      }
      onClick={(e) =>
        handleConsumer(e, action, userDataConsumerLength, renderCount)
      }
    >
      {action === 'previous' ? (
        <>
          <FaArrowLeft className="translate-x-[-0.4rem] group-hover:translate-x-[-0.6rem] text-sm transition-all duration-300" />
          <span>Back</span>
        </>
      ) : (
        <>
          <span>Next</span>
          <FaArrowRight className="translate-x-[0.4rem] group-hover:translate-x-[0.6rem] text-sm transition-all duration-300" />
        </>
      )}
    </Button>
  );
};

export default __formActionBtn;
