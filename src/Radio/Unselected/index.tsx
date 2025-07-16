import { RadioStateProps } from '@/Radio/Radio.types';
import Critical from '@/Radio/Unselected/Critical';
import Default from '@/Radio/Unselected/Default';
import Disabled from '@/Radio/Unselected/Disabled';
import Hover from '@/Radio/Unselected/Hover';
import Pressed from '@/Radio/Unselected/Pressed';

const Unselected = ({ state }: RadioStateProps) => {
  return (
    <>
      {(() => {
        switch (state) {
          case 'hover':
            return <Hover />;
          case 'pressed':
            return <Pressed />;
          case 'critical':
            return <Critical />;
          case 'disabled':
            return <Disabled />;
          case 'default':
          case 'focused':
          default:
            return <Default />;
        }
      })()}
    </>
  );
};

export default Unselected;
