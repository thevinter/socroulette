import { InputLabel, MenuItem, Select } from "@mui/material"
import { Controller } from "react-hook-form"

export default function Sexuality({control}) {
    return (
        <>
           <div>
                <Controller
                    name="Sexuality"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value } }) => (
                        <>
                            <InputLabel id="demo-simple-select-label">Sexuality</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Sexuality"
                                onChange={onChange}
                                value={value}
                            >
                                <MenuItem value={"Heterosexual"}>Heterosexual</MenuItem>
                                <MenuItem value={"Homosexual"}>Homosexual</MenuItem>
                                <MenuItem value={"Bisexual"}>Bisexual</MenuItem>
                                <MenuItem value={"Asexual"}>Asexual</MenuItem>
                                <MenuItem value={"Other"}>Other</MenuItem>
                            </Select> 
                        </>
                    )}
                />
            </div>  
            <div>
            <Controller
                    name="Orientation"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value } }) => (
                        <>
                            <InputLabel id="demo-simple-select-label">Orientation</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Orientation"
                                onChange={onChange}
                                value={value}
                            >
                                <MenuItem value={"Polygamous"}>Polygamous</MenuItem>
                                <MenuItem value={"Monogamous"}>Monogamous</MenuItem>
                            </Select> 
                        </>
                    )}
                />
            </div>  
            <div>
            <Controller
                    name="Relationship Status"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value } }) => (
                        <>
                            <InputLabel id="demo-simple-select-label">Relationship Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Relationship Status"
                                onChange={onChange}
                                value={value}
                            >
                                <MenuItem value={"Single"}>Single</MenuItem>
                                <MenuItem value={"Widowed"}>Widowed</MenuItem>
                                <MenuItem value={"Divorced"}>Divorced</MenuItem>
                                <MenuItem value={"Single Parent"}>Single Parent</MenuItem>
                                <MenuItem value={"Single Parent"}>Married</MenuItem>
                                <MenuItem value={"Single Parent"}>Engaged</MenuItem>
                            </Select> 
                        </>
                    )}
                />
            </div>
        </>
    )
}