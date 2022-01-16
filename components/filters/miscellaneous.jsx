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
import { useEffect, useState } from 'react';
import TriCheckbox from '../tricheckbox';

export default function Miscellaneous({ setFilters }) {
  const [religion, setReligion] = useState({
    Christian: 0,
    Muslim: 0,
    Jewish: 0,
    Atheist: 0,
    Hindu: 0,
    Other: 0,
  });
  const changeReligion = (idx, value) => {
    setReligion((state) => ({ ...state, [idx]: value % 3 }));
  };

  const [employ, setEmploy] = useState({
    Student: 0,
    'Part time worker': 0,
    'Full time worker': 0,
    'Business owner': 0,
    'Self-Employed': 0,
    'Unemployed but looking': 0,
    Neet: 0,
  });
  const changeEmploy = (idx, value) => {
    setEmploy((state) => ({ ...state, [idx]: value % 3 }));
  };

  const [politic, setPolitic] = useState({
    Leftist: 0,
    Centrist: 0,
    Fascist: 0,
    Comunist: 0,
    Other: 0,
    "I don't care": 0,
    Conservative: 0,
  });
  const changePolitic = (idx, value) => {
    setPolitic((state) => ({ ...state, [idx]: value % 3 }));
  };

  const [online, setOnline] = useState({
    'Most of the day': 0,
    'In the morning': 0,
    Afternoon: 0,
    Evening: 0,
    'A couple of times a week': 0,
    Rarely: 0,
  });
  const changeOnline = (idx, value) => {
    setOnline((state) => ({ ...state, [idx]: value % 3 }));
  };

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
  const [open, setOpen] = useState(false);

  const accordionColor = open ? '#FFF' : '#FFF';

  useEffect(
    () =>
      setFilters((old) => ({
        ...old,
        selected: {
          ...old.selected,
          religion: returnSelected(religion),
          employment: returnSelected(employ),
          politic: returnSelected(politic),
          online: returnSelected(online),
        },
        excluded: {
          ...old.excluded,
          religion: returnExcluded(religion),
          employment: returnExcluded(employ),
          politic: returnExcluded(politic),
          online: returnExcluded(online),
        },
      })),
    [religion, employ, politic, online, setFilters]
  );

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
        <Typography>Miscellaneous</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormLabel component="legend">Employment status</FormLabel>
        <TriCheckbox change={changeEmploy} name="Student" />
        <TriCheckbox change={changeEmploy} name="Part time worker" />
        <TriCheckbox change={changeEmploy} name="Full time worker" />
        <TriCheckbox change={changeEmploy} name="Business owner" />
        <TriCheckbox change={changeEmploy} name="Self-Employed" />
        <TriCheckbox change={changeEmploy} name="Unemployed but looking" />
        <TriCheckbox change={changeEmploy} name="Neet" />

        <FormLabel component="legend">Religion</FormLabel>
        <TriCheckbox change={changeReligion} name="Christian" />
        <TriCheckbox change={changeReligion} name="Muslim" />
        <TriCheckbox change={changeReligion} name="Jewish" />
        <TriCheckbox change={changeReligion} name="Atheist" />
        <TriCheckbox change={changeReligion} name="Hindu" />
        <TriCheckbox change={changeReligion} name="Other" />

        <FormLabel component="legend">Political Beliefs</FormLabel>
        <TriCheckbox change={changePolitic} name="Leftist" />
        <TriCheckbox change={changePolitic} name="Centrist" />
        <TriCheckbox change={changePolitic} name="Conservative" />
        <TriCheckbox change={changePolitic} name="Fascist" />
        <TriCheckbox change={changePolitic} name="Comunist" />
        <TriCheckbox change={changePolitic} name="Other" />
        <TriCheckbox change={changePolitic} name="I don't care" />

        <FormLabel component="legend">Online schedule</FormLabel>
        <TriCheckbox change={changeOnline} name="Most of the day" />
        <TriCheckbox change={changeOnline} name="In the morning" />
        <TriCheckbox change={changeOnline} name="Afternoon" />
        <TriCheckbox change={changeOnline} name="Evening" />
        <TriCheckbox change={changeOnline} name="A couple of times a week" />
        <TriCheckbox change={changeOnline} name="Rarely" />
      </AccordionDetails>
    </Accordion>
  );
}
