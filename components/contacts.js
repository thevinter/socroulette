import { TextField } from "@mui/material"
import { Controller } from "react-hook-form"

export default function Contacts({control}) {
        return (
        <>
            <Controller
                name="Kik"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                    <TextField value={value} onChange={onChange} id="outlined-basic" label="kik" variant="outlined" />
                )}
            />
              <Controller
                name="Discord"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                    <TextField value={value} onChange={onChange} id="outlined-basic" label="discord" variant="outlined" />
                )}
            />
              <Controller
                name="Snapchat"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                    <TextField value={value} onChange={onChange} id="outlined-basic" label="snapchat" variant="outlined" />
                )}
            />
              <Controller
                name="Email"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                    <TextField value={value} onChange={onChange} id="outlined-basic" label="email" variant="outlined" />
                )}
            />
        </>
    )
}