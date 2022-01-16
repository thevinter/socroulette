import {
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { Controller } from 'react-hook-form';

export default function Geography({ control }) {
  return (
    <>
      <div>
        <Controller
          name="Location"
          control={control}
          defaultValue=""
          render={({ field: { onChange, ref, value } }) => (
            <FormControl sx={{ width: '100%', marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label">Current location</InputLabel>
              <Select
                inputRef={ref}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Current location"
                onChange={onChange}
                value={value}
              >
                <MenuItem value={'Eastern Europe'}>Eastern Europe</MenuItem>
                <MenuItem value={'Western Europe'}>Western Europe</MenuItem>
                <MenuItem value={'East Asia'}>East Asia</MenuItem>
                <MenuItem value={'West Asia'}>West Asia</MenuItem>
                <MenuItem value={'Australia/NZ/Oceania'}>Australia/NZ/Oceania</MenuItem>
                <MenuItem value={'North America'}>North America</MenuItem>
                <MenuItem value={'South America'}>South America</MenuItem>
                <MenuItem value={'Africa'}>Africa</MenuItem>
              </Select>
            </FormControl>
          )}
        />
      </div>
      <div>
        <Controller
          name="Timezone"
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={({ field: { onChange, ref, value } }) => (
            <FormControl sx={{ width: '100%', marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label">Timezone</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Timezone"
                onChange={onChange}
                inputRef={ref}
                value={value}
              >
                <MenuItem value={-12}>UTC−12:00</MenuItem>
                <MenuItem value={-11}>UTC−11:00</MenuItem>
                <MenuItem value={-10.0}>UTC−10:00</MenuItem>
                <MenuItem value={-9.3}>UTC−09:30</MenuItem>
                <MenuItem value={-9.0}>UTC−09:00</MenuItem>
                <MenuItem value={-8.0}>UTC−08:00</MenuItem>
                <MenuItem value={-7.0}>UTC−07:00</MenuItem>
                <MenuItem value={-6.0}>UTC−06:00</MenuItem>
                <MenuItem value={-5.0}>UTC−05:00</MenuItem>
                <MenuItem value={-4.0}>UTC−04:00</MenuItem>
                <MenuItem value={-3.3}>UTC−03:30</MenuItem>
                <MenuItem value={-2.0}>UTC−02:00</MenuItem>
                <MenuItem value={-1.0}>UTC−01:00</MenuItem>
                <MenuItem value={0}>UTC±00:00</MenuItem>
                <MenuItem value={1}>UTC+01:00</MenuItem>
                <MenuItem value={2}>UTC+02:00</MenuItem>
                <MenuItem value={3}>UTC+03:00</MenuItem>
                <MenuItem value={3}>UTC+03:30</MenuItem>
                <MenuItem value={4}>UTC+04:00</MenuItem>
                <MenuItem value={4}>UTC+04:30</MenuItem>
                <MenuItem value={5}>UTC+05:00</MenuItem>
                <MenuItem value={5.3}>UTC+05:30</MenuItem>
                <MenuItem value={5.45}>UTC+05:45</MenuItem>
                <MenuItem value={6}>UTC+06:00</MenuItem>
                <MenuItem value={6.3}>UTC+06:30</MenuItem>
                <MenuItem value={7}>UTC+07:00</MenuItem>
                <MenuItem value={8}>UTC+08:00</MenuItem>
                <MenuItem value={8.45}>UTC+08:45</MenuItem>
                <MenuItem value={9.0}>UTC+09:00</MenuItem>
                <MenuItem value={9.3}>UTC+09:30</MenuItem>
                <MenuItem value={10.0}>UTC+10:00</MenuItem>
                <MenuItem value={10.3}>UTC+10:30</MenuItem>
                <MenuItem value={11.0}>UTC+11:00</MenuItem>
                <MenuItem value={12.0}>UTC+12:00</MenuItem>
                <MenuItem value={12.45}>UTC+12:45</MenuItem>
                <MenuItem value={13.0}>UTC+13:00</MenuItem>
                <MenuItem value={14.0}>UTC+14:00</MenuItem>
              </Select>
            </FormControl>
          )}
        />
      </div>
      <div>
        <Controller
          name="Country"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <>
              <TextField
                sx={{ width: '100%', marginTop: 2 }}
                onChange={onChange}
                value={value}
                id="outlined-basic"
                label="Country/State (optional)"
                variant="outlined"
              />
            </>
          )}
        />
      </div>
    </>
  );
}
