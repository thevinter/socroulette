/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import { FormControlLabel, Checkbox } from "@mui/material"
import { green, red, grey} from "@mui/material/colors"
import { useEffect, useState } from "react"

export default function TriCheckbox({change, name}){
  const [checked, setChecked] = useState(0)
  const handleChange = () => {
    setChecked(state => state + 1)
  }

  useEffect(() => {
    change(name, checked)
  }, [checked])

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
            checked={checked%3 === 1}
            indeterminate={checked%3 == 2}
            onChange={handleChange}
          />
        }
      />
    </div>
  )
}