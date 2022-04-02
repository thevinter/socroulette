import {
  FormLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Slider,
} from '@mui/material';

export default function FilterLabel({ label }) {
  if (label === undefined) {
    return null;
  } else {
    return (
      <FormLabel sx={{ marginTop: '10px', marginBottom: '5px' }} component="legend">
        {label}
      </FormLabel>
    );
  }
}
