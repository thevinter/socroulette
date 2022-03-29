import { FormControlLabel, Checkbox } from '@mui/material';
import { green, red, grey } from '@mui/material/colors';
import { useEffect, useState, useCallback } from 'react';

export type TristateProps = {
  onChange: (id: string, value: number) => void;
  name: string;
  id: string;
  state: number;
};

export function TriCheckbox({ onChange, name, id, state }: TristateProps) {
  const [checked, setChecked] = useState(state % 3);
  const handleChange = useCallback(() => {
    setChecked((state) => (state + 1) % 3);
  }, [setChecked]);

  useEffect(() => {
    onChange(id, checked);
  }, [checked, onChange, id]);

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
