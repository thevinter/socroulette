import {
  FormLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Slider,
} from '@mui/material';

export default function FilterLabel({ label }) {
  if (label === null) {
    return <></>;
  } else {
    return (
      <FormLabel sx={{ marginTop: '5px', marginBottom: '5px' }} component="legend">
        {label}
      </FormLabel>
    );
  }
}
