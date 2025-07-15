import { JSX } from 'react';

import { CheckboxStateProps } from '@/Checkbox';
import Critical from '@/Checkbox/Intermediate/Critical';
import Default from '@/Checkbox/Intermediate/Default';
import Disabled from '@/Checkbox/Intermediate/Disabled';
import Hover from '@/Checkbox/Intermediate/Hover';
import Pressed from '@/Checkbox/Intermediate/Pressed';

const Intermediate = ({ state }: CheckboxStateProps): JSX.Element => {
  return (
    <>
      {(() => {
        switch (state) {
          case 'critical':
            return <Critical />;
          case 'disabled':
            return <Disabled />;
          case 'pressed':
            return <Pressed />;
          case 'hover':
            return <Hover />;
          case 'focused':
          case 'default':
          default:
            return <Default />;
        }
      })()}
    </>
  );
};

export default Intermediate;
