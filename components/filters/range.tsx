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

type RangeProp = {
  label: string;
  value: [number, number];
  range: [number, number];
  onChange: (value: [number, number]) => void;
};

export default function RangeSlider({ label, range, value, onChange }: RangeProp) {
  const [state, setState] = useState(value as number[]);
  const [min, max] = range;
  return (
    <div>
      <FormLabel component="legend">{label}</FormLabel>
      <Slider
        getAriaLabel={() => 'Desired range'}
        min={min}
        max={max}
        value={state}
        onChange={(_, newval) => setState(newval as number[])}
        onChangeCommitted={(_, newval) => onChange(newval as [number, number])}
        valueLabelDisplay="auto"
      />
    </div>
  );
}
