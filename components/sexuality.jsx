import { InputLabel, FormControl, MenuItem, Select } from '@mui/material';
import { Controller } from 'react-hook-form';
import styles from './sexuality.module.css';

export default function Sexuality({ user, control, errors }) {
  return (
    <div className={styles.inputList}>
      <div className={styles.input}>
        <Controller
          name="Sexuality"
          control={control}
          rules={{ required: true }}
          defaultValue={user ? user.sexuality : 'Heterosexual'}
          render={({ field: { onChange, value, ref } }) => (
            <FormControl sx={{ width: '100%' }}>
              <InputLabel id="demo-simple-select-label">Sexuality</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Sexuality"
                inputRef={ref}
                onChange={onChange}
                value={value}
              >
                <MenuItem value={'Heterosexual'}>Heterosexual</MenuItem>
                <MenuItem value={'Homosexual'}>Homosexual</MenuItem>
                <MenuItem value={'Bisexual'}>Bisexual</MenuItem>
                <MenuItem value={'Asexual'}>Asexual</MenuItem>
                <MenuItem value={'Other'}>Other</MenuItem>
              </Select>
            </FormControl>
          )}
        />
        {errors.Sexuality && <div className="error">This field is required</div>}
      </div>
      <div className={styles.input}>
        <Controller
          name="Orientation"
          rules={{ required: true }}
          control={control}
          defaultValue={user ? user.orientation : 'Monogamous'}
          render={({ field: { onChange, ref, value } }) => (
            <FormControl sx={{ width: '100%' }}>
              <InputLabel id="demo-simple-select-label">Orientation</InputLabel>
              <Select
                inputRef={ref}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Orientation"
                onChange={onChange}
                value={value}
              >
                <MenuItem value={'Polygamous'}>Polygamous</MenuItem>
                <MenuItem value={'Monogamous'}>Monogamous</MenuItem>
              </Select>
            </FormControl>
          )}
        />
        {errors.Orientation && <div className="error">This field is required</div>}
      </div>
      <div className={styles.input}>
        <Controller
          name="Relationship Status"
          control={control}
          rules={{ required: true }}
          defaultValue={user ? user.relstatus : 'Single'}
          render={({ field: { onChange, ref, value } }) => (
            <FormControl sx={{ width: '100%' }}>
              <InputLabel id="demo-simple-select-label">Relationship Status</InputLabel>
              <Select
                inputRef={ref}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Relationship Status"
                onChange={onChange}
                value={value}
              >
                <MenuItem value={'Single'}>Single</MenuItem>
                <MenuItem value={'Widowed'}>Widowed</MenuItem>
                <MenuItem value={'Divorced'}>Divorced</MenuItem>
                <MenuItem value={'Single Parent'}>Single Parent</MenuItem>
                <MenuItem value={'Married'}>Married</MenuItem>
                <MenuItem value={'Engaged'}>Engaged</MenuItem>
              </Select>
            </FormControl>
          )}
        />
      </div>
    </div>
  );
}
