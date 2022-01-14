import { ExpandMoreIcon, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material"
import TriCheckbox from "../tricheckbox"
import { useState, useEffect } from "react";

export default function Desires({setFilters}){

  const [desires, setDesires] = useState({
    "Safe for work chat": 0,
    "Gaming": 0,
    "Voice Chat": 0,
    "SFW Video Chat": 0,
    "Pic exchange": 0,
    Sexting: 0,
    "Pen pals": 0,
    "NSFW Video Chat": 0,
    "ERP": 0,
    "Meeting IRL": 0,
  });  

  const changeDesire = (idx, value) => {
    setDesires((state) => ({...state, [idx]: value%3}));
  }

  const returnSelected = (obj) => {
    let selected = [];
    for(let key in obj){
      if(obj[key] === 1){
        selected.push(key);
      }
    }
    return selected;
  }

  const returnExcluded = (obj) => {
    let excluded = [];
    for(let key in obj){
      if(obj[key] === 2){
        excluded.push(key);
      }
    }
    return excluded;
  }

  useEffect(() => setFilters((old) => (
    {   ...old,
      selected: {
        ...old.selected,
        lf: returnSelected(desires)
      },
      excluded: {
        ...old.excluded,
        lf: returnExcluded(desires)
      }
    })
  ), [desires, setFilters]);

  const desireList = [
    <TriCheckbox key="Safe for work chat" change={changeDesire} name="Safe for work chat"/>,
    <TriCheckbox key="Gaming" change={changeDesire} name="Gaming"/>,
    <TriCheckbox key="Voice Chat" change={changeDesire} name="Voice Chat"/>,
    <TriCheckbox key="SFW Video Chat" change={changeDesire} name="SFW Video Chat"/>,
    <TriCheckbox key="Pic exchange" change={changeDesire} name="Pic exchange"/>,
    <TriCheckbox key="Sexting" change={changeDesire} name="Sexting"/>,
    <TriCheckbox key="Pen pals" change={changeDesire} name="Pen pals"/>,
    <TriCheckbox key="NSFW Video Chat" change={changeDesire} name="NSFW Video Chat"/>,
    <TriCheckbox key="ERP" change={changeDesire} name="ERP"/>,
    <TriCheckbox key="Meeting IRL" change={changeDesire} name="Meeting IRL"/>,
  ]
  const [open, setOpen] = useState(false);
  
  const accordionColor = open ? "#FFCFA0" : "white";

  return (
    <>
      <Accordion onChange={() => setOpen((s) => !s)} sx={{transition:"all .35s", backgroundColor: accordionColor}}>
      <AccordionSummary
      aria-controls="panel1a-content"
      id="panel1a-header"
      >
      <Typography>What are you looking for?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>{desireList}</div>
      </AccordionDetails>
      </Accordion>
    </>
  )
}