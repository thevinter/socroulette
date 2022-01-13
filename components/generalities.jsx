import { Controller } from "react-hook-form"
import { TextField, FormControl, FormGroup, FormControlLabel, Checkbox, MenuItem, InputLabel, Select } from "@mui/material"
import styles from './generalities.module.css'

export default function Generalities({control}) {
        return (
        <>
            <Controller
                name="Age"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                    <TextField sx={{width:"100%"}} onChange={onChange} value={value} id="outlined-basic" label="Age" variant="outlined" />
                )}
            />
            <div className={styles.input}>
            <InputLabel id="demo-simple-select-label">Your ethnicity</InputLabel>
            <FormGroup>
                <FormControlLabel control={
                    <Controller 
                        name="White" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="White" 
                />
                <FormControlLabel control={
                    <Controller 
                        name="Hispanic" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="Hispanic" 
                />
                <FormControlLabel control={
                    <Controller 
                        name="WAsian" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="West Asian" 
                />
                <FormControlLabel control={
                    <Controller 
                        name="EAsian" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="East Asian" 
                />
                <FormControlLabel control={
                    <Controller 
                        name="Hawaiian" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="Native Hawaiian or Other Pacific Islander" 
                />  
                <FormControlLabel control={
                    <Controller 
                        name="Black" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="Black or African American" 
                />    
                <FormControlLabel control={
                    <Controller 
                        name="Indian" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="American Indian or Alaska Native" 
                />                                  
            </FormGroup>
            </div>
            <div className={styles.inputList}>
            <Controller
                name="BodyType"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                    <FormControl sx={{width:"100%", marginTop:2}}>
                    <InputLabel id="demo-simple-select-label">Your body type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Your body type"
                        onChange={onChange} 
                        value={value} 
                    >
                        <MenuItem value={"Skinny/underweight"}>Skinny/underweight</MenuItem>
                        <MenuItem value={"Average"}>Average</MenuItem>
                        <MenuItem value={"Hourglass"}>Hourglass</MenuItem>
                        <MenuItem value={"Lean/fit"}>Lean/fit</MenuItem>
                        <MenuItem value={"Buff/muscular"}>Buff/muscular</MenuItem>
                        <MenuItem value={"Chubby"}>Chubby</MenuItem>
                        <MenuItem value={"Fat"}>Fat</MenuItem>
                        <MenuItem value={"Obese"}>Obese</MenuItem>
                    </Select> 
                    </FormControl>
                )}
            />
            <Controller
                name="Height"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                    <TextField sx={{width:"100%", marginTop:2}} onChange={onChange} value={value} id="outlined-basic" label="Height (cm)" variant="outlined" />
                )}
            />

            <Controller
                name="Hair"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                    <FormControl sx={{width:"100%", marginTop:2}}>
                    <InputLabel id="demo-simple-select-label">Hair Color</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Hair color"
                      onChange={onChange} 
                      value={value} 
                    >
                    <MenuItem value={"Blonde"}>Blonde</MenuItem>
                        <MenuItem value={"Brown"}>Brown</MenuItem>
                        <MenuItem value={"Black"}>Black</MenuItem>
                        <MenuItem value={"Red/Ginger"}>Red/Ginger</MenuItem>
                        <MenuItem value={"White/Gray"}>White/Gray</MenuItem>
                        <MenuItem value={"Shaved"}>Shaved</MenuItem>
                        <MenuItem value={"Other"}>Other</MenuItem>
                    </Select> 
                    </FormControl>
                )}
            />
            <Controller
                name="Skin"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                    <FormControl sx={{width:"100%", marginTop:2}}>
                        <InputLabel id="demo-simple-select-label">Your skin color</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Your skin color"
                            onChange={onChange} 
                            value={value} 
                        >
                            <MenuItem value={"Light, Pale White"}>Light, Pale White</MenuItem>
                            <MenuItem value={"White"}>White</MenuItem>
                            <MenuItem value={"Medium, White to Olive"}>Medium, White to Olive</MenuItem>
                            <MenuItem value={"Olive, Moderate Brown"}>Olive, Moderate Brown</MenuItem>
                            <MenuItem value={"Brown, Dark Brown"}>Brown, Dark Brown</MenuItem>
                            <MenuItem value={"Black, Very Dark"}>Black, Very Dark</MenuItem>
                        </Select> 
                    </FormControl>
                )}
            />
            </div>
        </>
    )
}