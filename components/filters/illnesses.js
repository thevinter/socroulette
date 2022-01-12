import { ExpandMoreIcon, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material"
import TriCheckbox from "../tricheckbox"
import { useState } from "react";

export default function Illnesses(){

    const [disorders, setDisorders] = useState({
        Schizofrenia: 0,
        "Bipolar Disorder": 0,
        Depression: 0,
        ADHD: 0,
        PTSD: 0,
        Anxiety: 0,
        "Eating Disorders": 0,
        Insomnia: 0,
        "Borderline Personality Disorder": 0,
        "Addiction / Substance Abuse": 0,
    });

    const changeDisorder = (idx, value) => {
        setDisorders((state) => ({...state, [idx]: value%3}));
    }

    const illnesses = [
        <TriCheckbox key="Schizofrenia" change={changeDisorder} name="Schizofrenia"/>,
        <TriCheckbox key="Bipolar Disorder" change={changeDisorder} name="Bipolar DisorderBPD"/>,
        <TriCheckbox key="Depression" change={changeDisorder} name="Depression"/>,
        <TriCheckbox key="ADHD" change={changeDisorder} name="ADHD"/>,
        <TriCheckbox key="PTSD" change={changeDisorder} name="PTSD"/>,
        <TriCheckbox key="Eating" change={changeDisorder} name="Eating Disorders"/>,
        <TriCheckbox key="Insomnia" change={changeDisorder} name="Insomnia"/>,
        <TriCheckbox key="Borderline Personality Disorder" change={changeDisorder} name="Borderline Personality Disorder"/>,
        <TriCheckbox key="Addiction / Substance Abuse" change={changeDisorder} name="Addiction / Substance Abuse"/>
    ]

    return (
        <>
            <Accordion>
            <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography>Illnesses</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div>{illnesses}</div>
            </AccordionDetails>
            </Accordion>
      </>
    )
}