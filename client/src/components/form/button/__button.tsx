import { UnstyledBtn } from './modules';

const __button = ({ ...props }: CustomButtonProps): JSX.Element => {
  switch (props.category) {
    case 'unstyled':
      return <UnstyledBtn {...props} />;
    case 'styled':
      return <UnstyledBtn {...props} />;
  }
};

export default __button;
