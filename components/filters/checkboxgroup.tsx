import { FormLabel } from '@mui/material';
import { TriCheckbox, TristateProps } from '../tricheckbox';
import { NestedObjSetterCallback } from './utils';
import { useState, useEffect, useCallback } from 'react';
import FilterLabel from './label';

export type CheckboxGroupProps = {
  legend: string;
  id: string;
  onChange: NestedObjSetterCallback<number>;
  items: { name: string; value: number }[];
};

export function CheckboxGroup({ onChange, id, legend, items }: CheckboxGroupProps): JSX.Element {
  const handleChange = useCallback((itemid, value) => onChange(id, itemid, value), [onChange, id]);

  const checkboxes = items.map((item) => (
    <TriCheckbox
      onChange={handleChange}
      name={item.name}
      key={item.name}
      id={item.name}
      state={item.value}
    />
  ));
  return (
    <div style={{ marginBottom: '20px' }}>
      <FilterLabel label={legend} />
      {checkboxes}
    </div>
  );
}

export default CheckboxGroup;
