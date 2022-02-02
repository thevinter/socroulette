import { Controller } from 'react-hook-form';
import {
  TextField,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  MenuItem,
  InputLabel,
  Select,
} from '@mui/material';
import styles from './generalities.module.css';

export default function Generalities({ user, control, errors }) {
  return (
    <>
      <Controller
        name="Age"
        control={control}
        defaultValue={user ? user.age : ''}
        rules={{ min: 18, max: 100, required: true }}
        render={({ field: { onChange, ref, value } }) => (
          <TextField
            sx={{ width: '100%' }}
            onChange={(e) => {
              const onlyNums = e.target.value.replace(/[^0-9]/g, '');
              onChange(onlyNums);
            }}
            inputRef={ref}
            value={value}
            id="outlined-basic"
            label="Age"
            variant="outlined"
          />
        )}
      />
      {errors.Age && <div className="error">This field is required</div>}

      <div className={styles.input}>
        <InputLabel id="demo-simple-select-label">Your ethnicity</InputLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Controller
                name="White"
                defaultValue={user ? user.ethnicity.includes('White') : false}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Checkbox checked={value} onChange={onChange} />
                )}
              />
            }
            label="White"
          />
          <FormControlLabel
            control={
              <Controller
                name="Hispanic"
                defaultValue={user ? user.ethnicity.includes('Hispanic') : false}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Checkbox checked={value} onChange={onChange} />
                )}
              />
            }
            label="Hispanic"
          />
          <FormControlLabel
            control={
              <Controller
                name="WAsian"
                defaultValue={user ? user.ethnicity.includes('West Asian') : false}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Checkbox checked={value} onChange={onChange} />
                )}
              />
            }
            label="West Asian"
          />
          <FormControlLabel
            control={
              <Controller
                name="EAsian"
                defaultValue={user ? user.ethnicity.includes('East Asian') : false}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Checkbox checked={value} onChange={onChange} />
                )}
              />
            }
            label="East Asian"
          />
          <FormControlLabel
            control={
              <Controller
                name="Hawaiian"
                defaultValue={
                  user
                    ? user.ethnicity.includes('Native Hawaiian or Other Pacific Islander')
                    : false
                }
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Checkbox checked={value} onChange={onChange} />
                )}
              />
            }
            label="Native Hawaiian or Other Pacific Islander"
          />
          <FormControlLabel
            control={
              <Controller
                name="Black"
                defaultValue={user ? user.ethnicity.includes('Black or African American') : false}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Checkbox checked={value} onChange={onChange} />
                )}
              />
            }
            label="Black or African American"
          />
          <FormControlLabel
            control={
              <Controller
                name="Indian"
                defaultValue={
                  user ? user.ethnicity.includes('American Indian or Alaska Native') : false
                }
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Checkbox checked={value} onChange={onChange} />
                )}
              />
            }
            label="American Indian or Alaska Native"
          />
        </FormGroup>
      </div>
      <div className={styles.inputList}>
        <Controller
          name="BodyType"
          control={control}
          defaultValue={user ? user.btype : ''}
          rules={{ required: true }}
          render={({ field: { onChange, ref, value } }) => (
            <FormControl sx={{ width: '100%', marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label">Your body type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Your body type"
                onChange={onChange}
                inputRef={ref}
                value={value}
              >
                <MenuItem value={'Skinny/underweight'}>Skinny/underweight</MenuItem>
                <MenuItem value={'Average'}>Average</MenuItem>
                <MenuItem value={'Hourglass'}>Hourglass</MenuItem>
                <MenuItem value={'Lean/fit'}>Lean/fit</MenuItem>
                <MenuItem value={'Buff/muscular'}>Buff/muscular</MenuItem>
                <MenuItem value={'Chubby'}>Chubby</MenuItem>
                <MenuItem value={'Fat'}>Fat</MenuItem>
                <MenuItem value={'Obese'}>Obese</MenuItem>
              </Select>
            </FormControl>
          )}
        />
        {errors.BodyType && <div className="error">This field is required</div>}

        <Controller
          name="Height"
          control={control}
          defaultValue={user ? user.height : ''}
          rules={{ min: 100, max: 250, required: true }}
          render={({ field: { onChange, ref, value } }) => (
            <TextField
              inputRef={ref}
              sx={{ width: '100%', marginTop: 2 }}
              onChange={(e) => {
                const onlyNums = e.target.value.replace(/[^0-9]/g, '');
                onChange(onlyNums);
              }}
              value={value}
              id="outlined-basic"
              label="Height (cm)"
              variant="outlined"
            />
          )}
        />
        {errors.Height && <div className="error">This field is required</div>}

        <Controller
          name="Hair"
          control={control}
          defaultValue={user ? user.hair : ''}
          rules={{ required: true }}
          render={({ field: { onChange, ref, value } }) => (
            <FormControl sx={{ width: '100%', marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label">Hair color</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                inputRef={ref}
                label="Hair color"
                onChange={onChange}
                value={value}
              >
                <MenuItem value={'Blonde'}>Blonde</MenuItem>
                <MenuItem value={'Brown'}>Brown</MenuItem>
                <MenuItem value={'Black'}>Black</MenuItem>
                <MenuItem value={'Red/Ginger'}>Red/Ginger</MenuItem>
                <MenuItem value={'White/Gray'}>White/Gray</MenuItem>
                <MenuItem value={'Shaved'}>Shaved</MenuItem>
                <MenuItem value={'Other'}>Other</MenuItem>
              </Select>
            </FormControl>
          )}
        />
        {errors.Hair && <div className="error">This field is required</div>}

        <Controller
          name="Skin"
          control={control}
          defaultValue={user ? user.skin : ''}
          rules={{ required: true }}
          render={({ field: { onChange, ref, value } }) => (
            <FormControl sx={{ width: '100%', marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label">Your skin color</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Your skin color"
                inputRef={ref}
                onChange={onChange}
                value={value}
              >
                <MenuItem value={'Light, Pale White'}>Light, Pale White</MenuItem>
                <MenuItem value={'White'}>White</MenuItem>
                <MenuItem value={'Medium, White to Olive'}>Medium, White to Olive</MenuItem>
                <MenuItem value={'Olive, Moderate Brown'}>Olive, Moderate Brown</MenuItem>
                <MenuItem value={'Brown, Dark Brown'}>Brown, Dark Brown</MenuItem>
                <MenuItem value={'Black, Very Dark'}>Black, Very Dark</MenuItem>
              </Select>
            </FormControl>
          )}
        />
        {errors.Skin && <div className="error">This field is required</div>}
      </div>
    </>
  );
}
