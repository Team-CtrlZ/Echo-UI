import { CheckboxStateProps } from '@/Checkbox';
import Critical from '@/Checkbox/Selected/Critical';
import Default from '@/Checkbox/Selected/Default';
import Disabled from '@/Checkbox/Selected/Disabled';
import Hover from '@/Checkbox/Selected/Hover';
import Pressed from '@/Checkbox/Selected/Pressed';

const Selected = ({ state }: CheckboxStateProps) => {
  return (
    <>
      {(() => {
        switch (state) {
          case 'critical':
            return <Critical />;
          case 'disabled':
            return <Disabled />;
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

export default Selected;
