import { ExpandMoreIcon, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material"
import TriCheckbox from "../tricheckbox"
import { useState } from "react";

export default function Kinks(){

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

    const changeKink = (idx, value) => {
        setKinks((state) => ({...state, [idx]: value%3}));
    }

    const kinkList = [
        <TriCheckbox key="BDSM" change={changeKink} name="BDSM"/>,
        <TriCheckbox key="Ropeplay" change={changeKink} name="Ropeplay"/>,
        <TriCheckbox key="Bestiality" change={changeKink} name="Bestiality"/>,
        <TriCheckbox key="Voyeurism" change={changeKink} name="Voyeurism"/>,
        <TriCheckbox key="Exhibitionism" change={changeKink} name="Exhibitionism"/>,
        <TriCheckbox key="Roleplay" change={changeKink} name="Roleplay"/>,
        <TriCheckbox key="Watersports" change={changeKink} name="Watersports"/>,
        <TriCheckbox key="Humiliation" change={changeKink} name="Humiliation"/>,
        <TriCheckbox key="Cuckolding" change={changeKink} name="Cuckolding"/>,
        <TriCheckbox key="Femdom" change={changeKink} name="Femdom"/>,
        <TriCheckbox key="CNC" change={changeKink} name="CNC"/>,
        <TriCheckbox key="Scat" change={changeKink} name="Scat"/>,
    ]
    return (
        <>
            <Accordion>
            <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography>Kinks</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div>{kinkList}</div>
            </AccordionDetails>
            </Accordion>
      </>
    )
}