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
import { FilterData } from './utils';

export const data: FilterData = {
  ranges: {
    age: [18, 100],
  },
  binaryProps: {
    sex: ['Male', 'Female', 'Other'],
    gender: ['Male', 'Female', 'Other'],
    orientation: ['Polygamous', 'Monogamous'],
    status: ['Single', 'Widowed', 'Divorced', 'Married', 'Single parent', 'Engaged'],
    sexuality: ['Heterosexual', 'Homosexual', 'Bisexual', 'Asexual', 'Other'],
  },
};

function useRangeOf(property) {
  let [min, max] = data.ranges[property];
  const [value, setter] = useState([min, max]);
  return [value, setter];
}

function useTristateOf(property) {
  const possible_values = data.binaryProps[property];
  let obj = Object.fromEntries(possible_values.map((v) => [v, 0]));
  let [val, setter] = useState(obj);
  const changer = (idx, value) => {
    setter((state) => ({ ...state, [idx]: value }));
  };
  return [val, changer];
}

export default function General({ setFilters }) {
  const [age, setAge] = useRangeOf('age');
  const [sex, changeSex] = useTristateOf('sex');
  const [gender, changeGender] = useTristateOf('gender');
  const [orientation, changeOrientation] = useTristateOf('orientation');
  const [status, changeStatus] = useTristateOf('status');
  const [sexuality, changeSexuality] = useTristateOf('sexuality');

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

  useEffect(
    () =>
      setFilters((old) => ({
        ...old,
        age: age,
        selected: {
          ...old.selected,
          sexuality: returnSelected(sexuality),
          sex: returnSelected(sex),
          gender: returnSelected(gender),
          orientation: returnSelected(orientation),
          status: returnSelected(status),
        },
        excluded: {
          ...old.excluded,
          sexuality: returnExcluded(sexuality),
          sex: returnExcluded(sex),
          gender: returnExcluded(gender),
          orientation: returnExcluded(orientation),
          status: returnExcluded(status),
        },
      })),
    [sexuality, age, sex, gender, orientation, status, setFilters]
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
        <Typography>General</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <p>Age</p>
          <Slider
            getAriaLabel={() => 'Desired range'}
            min={18}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            valueLabelDisplay="auto"
          />
        </div>

        <div>
          <FormLabel component="legend">Sex at birth</FormLabel>
          <TriCheckbox change={changeSex} name="Male" />
          <TriCheckbox change={changeSex} name="Female" />
          <TriCheckbox change={changeSex} name="Other" />
        </div>

        <div>
          <FormLabel component="legend">Gender they identify with</FormLabel>
          <TriCheckbox change={changeGender} name="Male" />
          <TriCheckbox change={changeGender} name="Female" />
          <TriCheckbox change={changeGender} name="Other" />
        </div>

        <FormLabel component="legend">Their orientation</FormLabel>
        <TriCheckbox change={changeOrientation} name="Polygamous" />
        <TriCheckbox change={changeOrientation} name="Monogamous" />

        <FormLabel component="legend">Desired status</FormLabel>
        <TriCheckbox change={changeStatus} name="Single" />
        <TriCheckbox change={changeStatus} name="Widowed" />
        <TriCheckbox change={changeStatus} name="Divorced" />
        <TriCheckbox change={changeStatus} name="Single Parent" />
        <TriCheckbox change={changeStatus} name="Married" />
        <TriCheckbox change={changeStatus} name="Engaged" />

        <FormLabel component="legend">Desired Sexuality</FormLabel>
        <TriCheckbox change={changeSexuality} name="Heterosexual" />
        <TriCheckbox change={changeSexuality} name="Homosexual" />
        <TriCheckbox change={changeSexuality} name="Bisexual" />
        <TriCheckbox change={changeSexuality} name="Asexual" />
        <TriCheckbox change={changeSexuality} name="Other" />
      </AccordionDetails>
    </Accordion>
  );
}
