import { FormControlLabel, Checkbox } from '@mui/material';
import { green, red, grey } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import { TristateItem } from './filters/utils';

export function TriCheckbox({ onChange, name }: TristateItem) {
  const [checked, setChecked] = useState(0);
  const handleChange = () => {
    setChecked((state) => (state + 1) % 3);
  };

  useEffect(() => {
    onChange(checked);
  }, [checked, onChange]);

  return (
    <div>
      <FormControlLabel
        label={name}
        control={
          <Checkbox
            sx={{
              color: grey[800],
              '&.MuiCheckbox-indeterminate': {
                color: red[600],
              },
              '&.Mui-checked': {
                color: green[600],
              },
            }}
            checked={checked === 1}
            indeterminate={checked === 2}
            onChange={handleChange}
          />
        }
      />
    </div>
  );
}

export default TriCheckbox;
