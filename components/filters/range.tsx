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

type RangeProps = {
  label: string;
  id: string;
  value: [number, number];
  range: [number, number];
  onChange: (id: string, value: [number, number]) => void;
};

export default function RangeSlider({ label, id, range, value, onChange }: RangeProps) {
  const [state, setState] = useState(value as number[]);
  const [min, max] = range;
  const handleChange = useCallback(
    (_, newval) => {
      console.log('slider onChangeCommitted triggered');
      onChange(id, newval as [number, number]);
    },
    [id, onChange]
  );

  return (
    <div>
      <FormLabel component="legend">{label}</FormLabel>
      <Slider
        getAriaLabel={() => 'Desired range'}
        min={min}
        max={max}
        value={state}
        onChange={(_, newval) => {
          console.log('slider onChange triggered');
          setState(newval as number[]);
        }}
        onChangeCommitted={handleChange}
        valueLabelDisplay="auto"
      />
    </div>
  );
}
