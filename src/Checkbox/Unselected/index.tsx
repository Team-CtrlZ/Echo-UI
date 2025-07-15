import { JSX } from 'react';

import { CheckboxStateProps } from '@/Checkbox/Checkbox.types';
import Critical from '@/Checkbox/Unselected/Critical';
import Default from '@/Checkbox/Unselected/Default';
import Disabled from '@/Checkbox/Unselected/Disabled';
import Hover from '@/Checkbox/Unselected/Hover';
import Pressed from '@/Checkbox/Unselected/Pressed';

const Unselected = ({ state }: CheckboxStateProps): JSX.Element => {
  return (
    <>
      {(() => {
        switch (state) {
          case 'critical':
            return <Critical />;
          case 'hover':
            return <Hover />;
          case 'pressed':
            return <Pressed />;
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
