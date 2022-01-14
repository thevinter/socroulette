import {
  ExpandMoreIcon,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

export default function FilterList({ checkboxes, name }) {
  return (
    <>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>{checkboxes}</div>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
