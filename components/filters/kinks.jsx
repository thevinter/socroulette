import {
  ExpandMoreIcon,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import TriCheckbox from '../tricheckbox';
import { useState, useEffect } from 'react';

export default function Kinks({ setFilters }) {
  const [kinks, setKinks] = useState({
    BDSM: 0,
    Ropeplay: 0,
    Bestiality: 0,
    Voyeurism: 0,
    Exhibitionism: 0,
    Roleplay: 0,
    Watersports: 0,
    Humiliation: 0,
    Cuckolding: 0,
    Femdom: 0,
    CNC: 0,
    Scat: 0,
  });

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

  const changeKink = (idx, value) => {
    setKinks((state) => ({ ...state, [idx]: value % 3 }));
  };

  useEffect(
    () =>
      setFilters((old) => ({
        ...old,
        selected: {
          ...old.selected,
          kinks: returnSelected(kinks),
        },
        excluded: {
          ...old.excluded,
          kinks: returnExcluded(kinks),
        },
      })),
    [kinks, setFilters]
  );
  const [open, setOpen] = useState(false);

  const accordionColor = open ? '#D3DEDC' : '#D3DEDC';

  const kinkList = [
    <TriCheckbox key="BDSM" change={changeKink} name="BDSM" />,
    <TriCheckbox key="Ropeplay" change={changeKink} name="Ropeplay" />,
    <TriCheckbox key="Bestiality" change={changeKink} name="Bestiality" />,
    <TriCheckbox key="Voyeurism" change={changeKink} name="Voyeurism" />,
    <TriCheckbox key="Exhibitionism" change={changeKink} name="Exhibitionism" />,
    <TriCheckbox key="Roleplay" change={changeKink} name="Roleplay" />,
    <TriCheckbox key="Watersports" change={changeKink} name="Watersports" />,
    <TriCheckbox key="Humiliation" change={changeKink} name="Humiliation" />,
    <TriCheckbox key="Cuckolding" change={changeKink} name="Cuckolding" />,
    <TriCheckbox key="Femdom" change={changeKink} name="Femdom" />,
    <TriCheckbox key="CNC" change={changeKink} name="CNC" />,
    <TriCheckbox key="Scat" change={changeKink} name="Scat" />,
  ];
  return (
    <>
      <Accordion
        onChange={() => setOpen((s) => !s)}
        sx={{ transition: 'all .35s', backgroundColor: accordionColor }}
      >
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Kinks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>{kinkList}</div>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
