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
import RSelect from 'react-select';
import TriCheckbox from '../tricheckbox';

const boardList = [
  '/3/',
  '/a/',
  '/aco/',
  '/adv/',
  '/an/',
  '/asp/',
  '/b/',
  '/bant/',
  '/biz/',
  '/c/',
  '/cgl/',
  '/ck/',
  '/cm/',
  '/co/',
  '/d/',
  '/diy/',
  '/e/',
  '/fa/',
  '/fit/',
  '/g/',
  '/gd/',
  '/gif/',
  '/h/',
  '/hc/',
  '/hm/',
  '/hr/',
  '/i/',
  '/ic/',
  '/his/',
  '/int/',
  '/jp/',
  '/k/',
  '/lit/',
  '/lgbt/',
  '/m/',
  '/mlp/',
  '/mu/',
  '/news/',
  '/n/',
  '/o/',
  '/out/',
  '/p/',
  '/po/',
  '/pol/',
  '/pw/',
  '/qst/',
  '/r/',
  '/r9k/',
  '/s4s/',
  '/s/',
  '/sci/',
  '/soc/',
  '/sp/',
  '/t/',
  '/tg/',
  '/toy/',
  '/trash/',
  '/trv/',
  '/tv/',
  '/u/',
  '/v/',
  '/vg/',
  '/vm/',
  '/vmg/',
  '/vip/',
  '/vp/',
  '/vr/',
  '/vrpg/',
  '/vst/',
  '/vt/',
  '/w/',
  '/wg/',
  '/wsg/',
  '/wsr/',
  '/x/',
  '/xs/',
  '/y/',
];

export default function Miscellaneous({ setFilters }) {
  const boards = boardList.map((board) => ({ value: board, label: board }));
  const [selectedBoards, setSelectedBoards] = useState([]);
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
    Communist: 0,
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
    const selected = [];
    for (let key in obj) {
      if (obj[key] === 1) {
        selected.push(key);
      }
    }
    return selected;
  };

  const returnExcluded = (obj) => {
    const excluded = [];
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
          boards: selectedBoards.map((board) => board.label),
        },
        excluded: {
          ...old.excluded,
          religion: returnExcluded(religion),
          employment: returnExcluded(employ),
          politic: returnExcluded(politic),
          online: returnExcluded(online),
        },
      })),
    [religion, employ, politic, online, setFilters, selectedBoards]
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
        <TriCheckbox change={changePolitic} name="Communist" />
        <TriCheckbox change={changePolitic} name="Other" />
        <TriCheckbox change={changePolitic} name="I don't care" />

        <FormLabel component="legend">Online schedule</FormLabel>
        <TriCheckbox change={changeOnline} name="Most of the day" />
        <TriCheckbox change={changeOnline} name="In the morning" />
        <TriCheckbox change={changeOnline} name="Afternoon" />
        <TriCheckbox change={changeOnline} name="Evening" />
        <TriCheckbox change={changeOnline} name="A couple of times a week" />
        <TriCheckbox change={changeOnline} name="Rarely" />

        <p>4chan boards to include</p>
        <RSelect
          isMulti
          menuPortalTarget={typeof window === 'undefined' ? null : document.body}
          styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
          options={boards}
          value={selectedBoards}
          onChange={setSelectedBoards}
        />
      </AccordionDetails>
    </Accordion>
  );
}
