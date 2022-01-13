import { RadioGroup, FormLabel, FormControlLabel, Radio, Accordion, AccordionSummary, AccordionDetails, Typography, Slider, Card, CardContent } from "@mui/material";
import { useState, useEffect } from "react";
import TriCheckbox from "../tricheckbox";

export default function General({setFilters}){
    const [age, setAge] = useState([18,100])

    const [sex, setSex] = useState(
        {
            Male: 0,
            Female: 0,
            Other: 0
        }
    )
    const changeSex = (idx, value) => {
        setSex((state) => ({...state, [idx]: value%3}));
    }

    const [gender, setGender] = useState(
        {
            Male: 0,
            Female: 0,
            Other: 0
        }
    )
    const changeGender = (idx, value) => {
        setGender((state) => ({...state, [idx]: value%3}));
    }

    const [orientation, setOrientation] = useState(
        {
            Polygamous: 0,
            Monogamous: 0
        }
    )
    const changeOrientation = (idx, value) => {
        setOrientation((state) => ({...state, [idx]: value%3}));
    }

    const [status, setStatus] = useState(
        {
            Single: 0,
            Widowed: 0,
            Divorced: 0,
            Married: 0,
            "Single Parent": 0,
            Engaged: 0,
        }
    )

    const changeStatus = (idx, value) => {
        setStatus((state) => ({...state, [idx]: value%3}));
    }
    
    const [sexuality, setSexuality] = useState(
        {
            Heterosexual: 0,
            Homosexual: 0,
            Bisexual: 0,
            Asexual: 0,
            Other: 0,
        }
    )
    const changeSexuality = (idx, value) => {
        setSexuality((state) => ({...state, [idx]: value%3}));
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

    useEffect(() => setFilters((old) =>
        ({   
            ...old,
            age: age,
            selected: {
                ...old.selected,
                sexuality: returnSelected(sexuality),
                sex: returnSelected(sex),
                gender: returnSelected(gender),
                orientation: returnSelected(orientation),
                status: returnSelected(status)
            },
            excluded: {
                ...old.excluded,
                sexuality: returnExcluded(sexuality),
                sex: returnExcluded(sex),
                gender: returnExcluded(gender),
                orientation: returnExcluded(orientation),
                status: returnExcluded(status)
            }
        })
    ), [sexuality, age, sex, gender, orientation, status, setFilters]);

    const [open, setOpen] = useState(false);

    const accordionColor = open ? "#FFCFA0" : "white";

    return (
        <Accordion onChange={() => setOpen((s) => !s)} sx={{transition:"all .35s",  backgroundColor: accordionColor}}>
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>General</Typography>
            </AccordionSummary>
            <AccordionDetails>
  
                    <p>Age</p>
                    <Slider
                        getAriaLabel={() => 'Desired range'}
                        min={18}
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        valueLabelDisplay="auto"
                    />

                    <FormLabel component="legend">Sex at birth</FormLabel>
                    <TriCheckbox change={changeSex} name="Male"/>
                    <TriCheckbox change={changeSex} name="Female"/>
                    <TriCheckbox change={changeSex} name="Other"/>

                    <FormLabel component="legend">Gender they identify with</FormLabel>
                    <TriCheckbox change={changeGender} name="Male"/>
                    <TriCheckbox change={changeGender} name="Female"/>
                    <TriCheckbox change={changeGender} name="Other"/>

                    <FormLabel component="legend">Their orientation</FormLabel>
                    <TriCheckbox change={changeOrientation} name="Polygamous"/>
                    <TriCheckbox change={changeOrientation} name="Monogamous"/>

                    <FormLabel component="legend">Desired status</FormLabel>
                    <TriCheckbox change={changeStatus} name="Single"/>
                    <TriCheckbox change={changeStatus} name="Widowed"/>
                    <TriCheckbox change={changeStatus} name="Divorced"/>
                    <TriCheckbox change={changeStatus} name="Single Parent"/>
                    <TriCheckbox change={changeStatus} name="Married"/>
                    <TriCheckbox change={changeStatus} name="Engaged"/>

                    <FormLabel component="legend">Desired Sexuality</FormLabel>
                    <TriCheckbox change={changeSexuality} name="Heterosexual"/>
                    <TriCheckbox change={changeSexuality} name="Homosexual"/>
                    <TriCheckbox change={changeSexuality} name="Bisexual"/>
                    <TriCheckbox change={changeSexuality} name="Asexual"/>
                    <TriCheckbox change={changeSexuality} name="Other"/>

            </AccordionDetails>
            </Accordion>
       
    )
}