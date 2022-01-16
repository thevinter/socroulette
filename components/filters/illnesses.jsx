import {
  ExpandMoreIcon,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import TriCheckbox from '../tricheckbox';
import { useState, useEffect } from 'react';

export default function Illnesses({ setFilters }) {
  const [disorders, setDisorders] = useState({
    Schizofrenia: 0,
    'Bipolar Disorder': 0,
    Depression: 0,
    ADHD: 0,
    PTSD: 0,
    Anxiety: 0,
    'Eating Disorders': 0,
    Insomnia: 0,
    'Borderline Personality Disorder': 0,
    'Addiction / Substance Abuse': 0,
  });

  const changeDisorder = (idx, value) => {
    setDisorders((state) => ({ ...state, [idx]: value % 3 }));
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

  useEffect(
    () =>
      setFilters((old) => ({
        ...old,
        selected: {
          ...old.selected,
          mental: returnSelected(disorders),
        },
        excluded: {
          ...old.excluded,
          mental: returnExcluded(disorders),
        },
      })),
    [disorders, setFilters]
  );

  const illnesses = [
    <TriCheckbox key="Schizofrenia" change={changeDisorder} name="Schizofrenia" />,
    <TriCheckbox key="Bipolar Disorder" change={changeDisorder} name="Bipolar DisorderBPD" />,
    <TriCheckbox key="Depression" change={changeDisorder} name="Depression" />,
    <TriCheckbox key="ADHD" change={changeDisorder} name="ADHD" />,
    <TriCheckbox key="PTSD" change={changeDisorder} name="PTSD" />,
    <TriCheckbox key="Eating" change={changeDisorder} name="Eating Disorders" />,
    <TriCheckbox key="Insomnia" change={changeDisorder} name="Insomnia" />,
    <TriCheckbox
      key="Borderline Personality Disorder"
      change={changeDisorder}
      name="Borderline Personality Disorder"
    />,
    <TriCheckbox
      key="Addiction / Substance Abuse"
      change={changeDisorder}
      name="Addiction / Substance Abuse"
    />,
  ];
  const [open, setOpen] = useState(false);

  const accordionColor = open ? '# #FFF' : '#FFF';

  return (
    <>
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
          <Typography>Illnesses</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>{illnesses}</div>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
