import AutoComplete from './AutoComplete';
import DropDown from './DropDown';
import Text from './Text';

export type FieldProps = {
  id: string;
  options?: string[];
  disabled: boolean,
}
export {
  AutoComplete,
  DropDown,
  Text,
}