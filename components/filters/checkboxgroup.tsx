import { FormLabel } from '@mui/material';
import TriCheckbox from '../newtricheck';
import { TristateItem } from './utils';

export type CheckboxGroupProps = {
  legend: string;
  items: Array<TristateItem>;
};

export function CheckboxGroup({ legend, items }: CheckboxGroupProps): JSX.Element {
  const checkboxes = items.map((item) => (
    <TriCheckbox onChange={item.onChange} name={item.name} key={item.name} />
  ));
  return (
    <div>
      <FormLabel component="legend">{legend}</FormLabel>
      {checkboxes}
    </div>
  );
}

export default CheckboxGroup;
