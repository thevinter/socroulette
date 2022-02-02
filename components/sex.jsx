import { FormControlLabel, FormControl, FormLabel, RadioGroup, Radio } from '@mui/material';
import { Controller } from 'react-hook-form';

export default function Sex({ user, control, errors }) {
  return (
    <>
      <div>
        <Controller
          name="Sex"
          control={control}
          rules={{ required: true }}
          defaultValue={user ? user.sex : ''}
          render={({ field: { onChange, ref, value } }) => (
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
                  inputRef={ref}
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
          )}
        />
        {errors.Sex && <div className="error">This field is required</div>}
      </div>
      <div>
        <Controller
          name="Gender"
          control={control}
          rules={{ required: true }}
          defaultValue={user ? user.gender : ''}
          render={({ field: { onChange, ref, value } }) => (
            <FormControl sx={{ margin: 1 }}>
              <FormLabel component="legend">Gender you identify with</FormLabel>
              <RadioGroup
                onChange={onChange}
                value={value}
                inputRef={ref}
                row
                aria-label="sex"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
          )}
        />
        {errors.Gender && <div className="error">This field is required</div>}
      </div>
    </>
  );
}
