import {
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { Controller } from "react-hook-form";

export default function Sex({ control }) {
  return (
    <>
      <div>
        <Controller
          name="Sex"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <FormControl sx={{ margin: 1 }}>
              <FormLabel component="legend">Sex at birth</FormLabel>
              <RadioGroup
                onChange={onChange}
                value={value}
                row
                aria-label="gender"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          )}
        />
      </div>
      <div>
        <Controller
          name="Gender"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <FormControl sx={{ margin: 1 }}>
              <FormLabel component="legend">Gender you identify with</FormLabel>
              <RadioGroup
                onChange={onChange}
                value={value}
                row
                aria-label="sex"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          )}
        />
      </div>
    </>
  );
}
