import {RadioGroup, FormLabel, FormControlLabel, Radio, Accordion, AccordionSummary, AccordionDetails, Typography, Slider, Card, CardContent} from "@mui/material";
import {useState, useEffect} from "react";
import TriCheckbox from "../tricheckbox";

export default function Physical({setFilters}) {
  const [height, setHeight] = useState([100, 250])

  const [getRace, setRace] = useState(
    {
      White: 0,
      Hispanic: 0,
      "West Asian": 0,
      "East Asian": 0,
      "Native Hawaiian or Other Pacific Islander": 0,
      "Black or African American": 0,
      "American Indian or Alaska Native": 0,
    }
  )
  const changeRace = (idx, value) => {
    setRace((state) => ({...state, [idx]: value % 3}));
  }

  const [hair, setHair] = useState(
    {
      Blonde: 0,
      Brown: 0,
      Black: 0,
      "Red/Ginger": 0,
      "White/Gray": 0,
      Shaved: 0,
      Other: 0,
    }
  )
  const changeHair = (idx, value) => {
    setHair((state) => ({...state, [idx]: value % 3}));
  }

  const [body, setBody] = useState(
    {
      "Skinny/underweight": 0,
      Average: 0,
      Hourglass: 0,
      "Lean/fit": 0,
      "Buff/muscular": 0,
      Chubby: 0,
      Fat: 0,
      Obese: 0
    }
  )
  const changeBody = (idx, value) => {
    setBody((state) => ({...state, [idx]: value % 3}));
  }

  const [skin, setSkin] = useState(
    {
      "Light, Pale White": 0,
      "White": 0,
      "Medium, White to Olive": 0,
      "Olive, Moderate Brown": 0,
      "Brown, Dark Brown": 0,
      "Black, Very Dark": 0,
    }
  )
  const changeSkin = (idx, value) => {
    setSkin((state) => ({...state, [idx]: value % 3}));
  }

  const returnSelected = (obj) => {
    console.log(obj)
    let selected = [];
    for (let key in obj) {
      if (obj[key] === 1) {
        selected.push(key);
      }
    }
    return selected;
  }

  const returnExcluded = (obj) => {
    let excluded = [];
    for (let key in obj) {
      if (obj[key] === 2) {
        excluded.push(key);
      }
    }
    return excluded;
  }

  useEffect(() => setFilters((old) =>
  ({
    ...old,
    height: height,
    selected: {
      ...old.selected,
      skin: returnSelected(skin),
      btype: returnSelected(body),
      hair: returnSelected(hair),
      ethnicity: returnSelected(getRace)
    },
    excluded: {
      ...old.excluded,
      skin: returnExcluded(skin),
      hair: returnExcluded(hair),
      btype: returnExcluded(body),
      ethnicity: returnExcluded(getRace)
    }
  })
  ), [skin, height, hair, body, getRace, setFilters]);

  const [open, setOpen] = useState(false);
  const accordionColor = open ? "#FFCFA0" : "white";

  return (
    <Accordion onChange={() => setOpen((s) => !s)} sx={{transition: "all .35s", backgroundColor: accordionColor}}>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Physical</Typography>
      </AccordionSummary>
      <AccordionDetails>

        <p>Height (cm)</p>
        <Slider
          getAriaLabel={() => 'Desired height'}
          min={100}
          max={250}
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          valueLabelDisplay="auto"
        />

        <FormLabel sx={{marginTop: "10px"}} component="legend">Ethnicity</FormLabel>
        <TriCheckbox change={changeRace} name="White" />
        <TriCheckbox change={changeRace} name="Hispanic" />
        <TriCheckbox change={changeRace} name="West Asian" />
        <TriCheckbox change={changeRace} name="East Asian" />
        <TriCheckbox change={changeRace} name="Native Hawaiian or Other Pacific Islander" />
        <TriCheckbox change={changeRace} name="Black or African American" />
        <TriCheckbox change={changeRace} name="American Indian or Alaska Native" />

        <FormLabel sx={{marginTop: "30px"}} component="legend">Body Type</FormLabel>
        <TriCheckbox change={changeBody} name="Skinny/underweight" />
        <TriCheckbox change={changeBody} name="Average" />
        <TriCheckbox change={changeBody} name="Hourglass" />
        <TriCheckbox change={changeBody} name="Lean/fit" />
        <TriCheckbox change={changeBody} name="Buff/muscular" />
        <TriCheckbox change={changeBody} name="Chubby" />
        <TriCheckbox change={changeBody} name="Fat" />
        <TriCheckbox change={changeBody} name="Obese" />

        <FormLabel sx={{marginTop: "30px"}} component="legend">Hair Color</FormLabel>
        <TriCheckbox change={changeHair} name="Blonde" />
        <TriCheckbox change={changeHair} name="Brown" />
        <TriCheckbox change={changeHair} name="Black" />
        <TriCheckbox change={changeHair} name="Red/Ginger" />
        <TriCheckbox change={changeHair} name="White/Gray" />
        <TriCheckbox change={changeHair} name="Shaved" />
        <TriCheckbox change={changeHair} name="Other" />

        <FormLabel sx={{marginTop: "30px"}} component="legend">Skin Color</FormLabel>
        <TriCheckbox change={changeSkin} name="Light, Pale White" />
        <TriCheckbox change={changeSkin} name="White" />
        <TriCheckbox change={changeSkin} name="Medium, White to Olive" />
        <TriCheckbox change={changeSkin} name="Olive, Moderate Brown" />
        <TriCheckbox change={changeSkin} name="Brown, Dark Brown" />
        <TriCheckbox change={changeSkin} name="Black, Very Dark" />

      </AccordionDetails>
    </Accordion>

  )
}

