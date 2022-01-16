import { Controller } from 'react-hook-form';
import { InputLabel, FormControl, TextField, MenuItem, Select } from '@mui/material';

export default function Status({ control }) {
  return (
    <>
      <div>
        <Controller
          name="Employment"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field: { onChange, ref, value } }) => (
            <FormControl sx={{ width: '100%', marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label">Your employment status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Your employment status"
                inputRef={ref}
                onChange={onChange}
                value={value}
              >
                <MenuItem value={'Student'}>Student</MenuItem>
                <MenuItem value={'Part time worker'}>Part time worker</MenuItem>
                <MenuItem value={'Full time worker'}>Full time worker</MenuItem>
                <MenuItem value={'Business owner'}>Business owner</MenuItem>
                <MenuItem value={'Self-Employed'}>Self-Employed</MenuItem>
                <MenuItem value={'Unemployed but looking'}>Unemployed but looking</MenuItem>
                <MenuItem value={'Neet'}>Neet</MenuItem>
              </Select>
            </FormControl>
          )}
        />
        {errors.Employment && <div className="error">This field is required</div>}
      </div>
      <div>
        <Controller
          name="Religion"
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={({ field: { onChange, value, ref } }) => (
            <FormControl sx={{ width: '100%', marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label">Religion</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                inputRef={ref}
                label="Religion"
                onChange={onChange}
                value={value}
              >
                <MenuItem value={'Christian'}>Christian</MenuItem>
                <MenuItem value={'Muslim'}>Muslim</MenuItem>
                <MenuItem value={'Jewish'}>Jewish</MenuItem>
                <MenuItem value={'Atheist'}>Atheist</MenuItem>
                <MenuItem value={'Hindu'}>Hindu</MenuItem>
                <MenuItem value={'Other'}>Other</MenuItem>
              </Select>
            </FormControl>
          )}
        />
        {errors.Religion && <div className="error">This field is required</div>}
      </div>
      <div>
        <Controller
          name="Political Beliefs"
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={({ field: { onChange, ref, value } }) => (
            <FormControl sx={{ width: '100%', marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label">Political Beliefs</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Political Beliefs"
                inputRef={ref}
                onChange={onChange}
                value={value}
              >
                <MenuItem value={'Leftist'}>Leftist</MenuItem>
                <MenuItem value={'Conservative'}>Conservative</MenuItem>
                <MenuItem value={'Centrist'}>Centrist</MenuItem>
                <MenuItem value={'Fascist'}>Fascist</MenuItem>
                <MenuItem value={'Comunist'}>Comunist</MenuItem>
                <MenuItem value={'Other'}>Other</MenuItem>
                <MenuItem value={"I don't care"}>I dont care</MenuItem>
              </Select>
            </FormControl>
          )}
        />
        {errors['Political Beliefs'] && <div className="error">This field is required</div>}
      </div>
      <div>
        <Controller
          name="Bio"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <FormControl sx={{ width: '100%', marginTop: 2 }}>
              <TextField
                placeholder="Optional bio..."
                multiline
                onChange={onChange}
                value={value}
                rows={4}
                maxRows={7}
              />
            </FormControl>
          )}
        />
      </div>
    </>
  );
}
