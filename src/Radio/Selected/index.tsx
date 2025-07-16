import { RadioStateProps } from '@/Radio/Radio.types';
import Critical from '@/Radio/Selected/Critical';
import Default from '@/Radio/Selected/Default';
import Disabled from '@/Radio/Selected/Disabled';
import Hover from '@/Radio/Selected/Hover';
import Pressed from '@/Radio/Selected/Pressed';

const Selected = ({ state }: RadioStateProps) => {
  return (
    <>
      {(() => {
        switch (state) {
          case 'hover':
            return <Hover />;
          case 'pressed':
            return <Pressed />;
          case 'disabled':
            return <Disabled />;
          case 'critical':
            return <Critical />;
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
