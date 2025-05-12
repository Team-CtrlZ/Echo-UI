import { CheckboxStateProps } from '@/Checkbox';
import Critical from '@/Checkbox/Preselected/Critical';
import Default from '@/Checkbox/Preselected/Default';
import Disabled from '@/Checkbox/Preselected/Disabled';
import Hover from '@/Checkbox/Preselected/Hover';
import Pressed from '@/Checkbox/Preselected/Pressed';

const Preselected = ({ state }: CheckboxStateProps) => {
  return (
    <>
      {(() => {
        switch (state) {
          case 'disabled':
            return <Disabled />;
          case 'critical':
            return <Critical />;
          case 'hover':
            return <Hover />;
          case 'pressed':
            return <Pressed />;
          case 'default':
          case 'focused':
          default:
            return <Default />;
        }
      })()}
    </>
  );
};

export default Preselected;
