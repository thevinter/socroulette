import {
  FormLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Slider,
} from '@mui/material';
import { useState, useEffect, useCallback, Dispatch, SetStateAction } from 'react';
import TriCheckbox from '../tricheckbox';
import CheckboxGroup from './checkboxgroup';
import FilterLabel from './label';

type RangeProps = {
  label: string;
  id: string;
  value: [number, number];
  range: [number, number];
  onChange: (id: string, value: [number, number]) => void;
};

export default function RangeSlider({
  label,
  id,
  range,
  value,
  onChange,
  ...extraProps
}: RangeProps) {
  const [state, setState] = useState(value as number[]);
  const [min, max] = range;
  const handleChange = useCallback(
    (_, newval) => onChange(id, newval as [number, number]),
    [id, onChange]
  );

  return (
    <div style={{ marginBottom: '20px' }}>
      <FilterLabel label={label} />
      <Slider
        getAriaLabel={() => 'Desired range'}
        min={min}
        max={max}
        value={state}
        onChange={(_, newval) => setState(newval as number[])}
        onChangeCommitted={handleChange}
        valueLabelDisplay="auto"
        {...extraProps}
      />
    </div>
  );
}
