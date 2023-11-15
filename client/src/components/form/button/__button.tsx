import { FilledBtn, OutlinedBtn, TransparentBtn, UnstyledBtn } from './modules';

const __button = ({ ...props }: CustomButtonProps): JSX.Element => {
  switch (props.category) {
    case 'unstyled':
      return <UnstyledBtn {...props} />;
    case 'styled': {
      switch (props.variant) {
        case 'filled':
          return <FilledBtn {...props} />;
        case 'outlined':
          return <OutlinedBtn {...props} />;
        case 'transparent':
          return <TransparentBtn {...props} />;
      }
    }
  }
};

export default __button;
