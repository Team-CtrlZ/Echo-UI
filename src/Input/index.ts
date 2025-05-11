import Input from '@/Input/Input/Input';
import Textarea from '@/Input/Textarea/Textarea';

interface InputsType {
  Input: typeof Input;
  Textarea: typeof Textarea;
}

export const Inputs: InputsType = {
  Input,
  Textarea
};
