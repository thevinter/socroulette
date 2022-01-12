import { InputLabel, FormControl, MenuItem, Select, TextField } from "@mui/material"
import { Controller } from "react-hook-form"

export default function Geography({control}) {
    return (
        <>
           <div>
                <Controller
                    name="Location"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value } }) => (
                        <FormControl sx={{width:"100%", marginTop:2}}>
                            <InputLabel id="demo-simple-select-label">Current location</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Current location"
                                onChange={onChange}
                                value={value}
                            >
                                <MenuItem value={"Eastern Europe"}>Eastern Europe</MenuItem>
                                <MenuItem value={"Western Europe"}>Western Europe</MenuItem>
                                <MenuItem value={"East Asia"}>East Asia</MenuItem>
                                <MenuItem value={"West Asia"}>West Asia</MenuItem>
                                <MenuItem value={"Australia/NZ/Oceania"}>Australia/NZ/Oceania</MenuItem>
                                <MenuItem value={"North America"}>North America</MenuItem>
                                <MenuItem value={"South America"}>South America</MenuItem>
                                <MenuItem value={"Africa"}>Africa</MenuItem>
                            </Select> 
                        </FormControl>
                    )}
                />
            </div>  
            <div>
            <Controller
                    name="Timezone"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value } }) => (
                        <FormControl sx={{width:"100%", marginTop:2}}>
                            <InputLabel id="demo-simple-select-label">Timezone</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Timezone"
                                onChange={onChange}
                                value={value}
                            >
                                <MenuItem value={"UTC−12:00"}>UTC−12:00</MenuItem>
                                <MenuItem value={"UTC−11:00"}>UTC−11:00</MenuItem>
                                <MenuItem value={"UTC−10:00"}>UTC−10:00</MenuItem>
                                <MenuItem value={"UTC−09:30"}>UTC−09:30</MenuItem>
                                <MenuItem value={"UTC−09:00"}>UTC−09:00</MenuItem>
                                <MenuItem value={"UTC−08:00"}>UTC−08:00</MenuItem>
                                <MenuItem value={"UTC−07:00"}>UTC−07:00</MenuItem>
                                <MenuItem value={"UTC−06:00"}>UTC−06:00</MenuItem>
                                <MenuItem value={"UTC−05:00"}>UTC−05:00</MenuItem>
                                <MenuItem value={"UTC−04:00"}>UTC−04:00</MenuItem>
                                <MenuItem value={"UTC−03:30"}>UTC−03:30</MenuItem>
                                <MenuItem value={"UTC−02:00"}>UTC−02:00</MenuItem>
                                <MenuItem value={"UTC−01:00"}>UTC−01:00</MenuItem>
                                <MenuItem value={"UTC±00:00"}>UTC±00:00</MenuItem>
                                <MenuItem value={"UTC+01:00"}>UTC+01:00</MenuItem>
                                <MenuItem value={"UTC+02:00"}>UTC+02:00</MenuItem>
                                <MenuItem value={"UTC+03:00"}>UTC+03:00</MenuItem>
                                <MenuItem value={"UTC+03:30"}>UTC+03:30</MenuItem>
                                <MenuItem value={"UTC+04:00"}>UTC+04:00</MenuItem>
                                <MenuItem value={"UTC+04:30"}>UTC+04:30</MenuItem>
                                <MenuItem value={"UTC+05:00"}>UTC+05:00</MenuItem>
                                <MenuItem value={"UTC+05:30"}>UTC+05:30</MenuItem>
                                <MenuItem value={"UTC+05:45"}>UTC+05:45</MenuItem>
                                <MenuItem value={"UTC+06:00"}>UTC+06:00</MenuItem>
                                <MenuItem value={"UTC+06:30"}>UTC+06:30</MenuItem>
                                <MenuItem value={"UTC+07:00"}>UTC+07:00</MenuItem>
                                <MenuItem value={"UTC+08:00"}>UTC+08:00</MenuItem>
                                <MenuItem value={"UTC+08:45"}>UTC+08:45</MenuItem>
                                <MenuItem value={"UTC+09:00"}>UTC+09:00</MenuItem>
                                <MenuItem value={"UTC+09:30"}>UTC+09:30</MenuItem>
                                <MenuItem value={"UTC+10:00"}>UTC+10:00</MenuItem>
                                <MenuItem value={"UTC+10:30"}>UTC+10:30</MenuItem>
                                <MenuItem value={"UTC+11:00"}>UTC+11:00</MenuItem>
                                <MenuItem value={"UTC+12:00"}>UTC+12:00</MenuItem>
                                <MenuItem value={"UTC+12:00"}>UTC+12:45</MenuItem>
                                <MenuItem value={"UTC+13:00"}>UTC+13:00</MenuItem>
                                <MenuItem value={"UTC+14:00"}>UTC+14:00</MenuItem>
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
                        <TextField sx={{width:"100%", marginTop:2}} onChange={onChange} value={value} id="outlined-basic" label="Country/State (optional)" variant="outlined" />
                    </>
                )}
            />
            </div>
        </>
    )
}