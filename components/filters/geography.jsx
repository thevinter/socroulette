import {
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Slider,
  Card,
  CardContent,
} from '@mui/material';
import { useState, useEffect } from 'react';
import TriCheckbox from '../tricheckbox';

export default function Geography({ setFilters }) {
  const [location, setLocation] = useState({
    'Eastern Europe': 0,
    'Western Europe': 0,
    'East Asia': 0,
    'West Asia': 0,
    'Australia/NZ/Oceania': 0,
    'North America': 0,
    'South America': 0,
    Africa: 0,
  });
  const changeLocation = (idx, value) => {
    setLocation((state) => ({ ...state, [idx]: value % 3 }));
  };

  function valueLabelFormat(value) {
    if (value > 0) value = '+' + value;
    return `UTC${value}:00`;
  }

  const returnSelected = (obj) => {
    let selected = [];
    for (let key in obj) {
      if (obj[key] === 1) {
        selected.push(key);
      }
    }
    return selected;
  };

  const returnExcluded = (obj) => {
    let excluded = [];
    for (let key in obj) {
      if (obj[key] === 2) {
        excluded.push(key);
      }
    }
    return excluded;
  };

  const [timezone, setTimezone] = useState([-12, 14]);

  useEffect(
    () =>
      setFilters((old) => ({
        ...old,
        timezone: timezone,
        selected: {
          ...old.selected,
          location: returnSelected(location),
        },
        excluded: {
          ...old.excluded,
          location: returnExcluded(location),
        },
      })),
    [location, timezone, setFilters]
  );

  const [open, setOpen] = useState(false);
  const accordionColor = open ? '#FFF' : '#FFF';

  return (
    <Accordion
      onChange={() => setOpen((s) => !s)}
      sx={{
        transition: 'all .35s',
        border: '1px solid rgb(0,0,0,.2)',
        borderStyle: 'solid none solid none',
        backgroundColor: accordionColor,
      }}
    >
      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
        <Typography>Geography</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <p>Timezone</p>
        <Slider
          getAriaLabel={() => 'Desired timezone'}
          min={-12}
          max={14}
          step={1}
          valueLabelFormat={valueLabelFormat}
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
          valueLabelDisplay="auto"
        />

        <FormLabel component="legend">Zone of residence</FormLabel>
        <TriCheckbox change={changeLocation} name="Eastern Europe" />
        <TriCheckbox change={changeLocation} name="Western Europe" />
        <TriCheckbox change={changeLocation} name="East Asia" />
        <TriCheckbox change={changeLocation} name="West Asia" />
        <TriCheckbox change={changeLocation} name="Australia/NZ/Oceania" />
        <TriCheckbox change={changeLocation} name="North America" />
        <TriCheckbox change={changeLocation} name="South America" />
        <TriCheckbox change={changeLocation} name="Africa" />
      </AccordionDetails>
    </Accordion>
  );
}
