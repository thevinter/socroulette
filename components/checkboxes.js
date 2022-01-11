import { Controller } from "react-hook-form"
import { FormLabel, FormGroup, FormControlLabel, Checkbox, MenuItem, InputLabel, Select } from "@mui/material"
export default function Checkboxes({control}) {
        return (
        <>
            <FormLabel component="legend">Your mental illnesses (ignore if none apply)</FormLabel>
            <FormGroup>
                <FormControlLabel control={
                    <Controller 
                        name="Schizofrenia" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="Schizofrenia" 
                />
                <FormControlLabel control={
                    <Controller 
                        name="BPD" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="Bipolar Disorder" 
                />
                <FormControlLabel control={
                    <Controller 
                        name="Depression" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="Depression" 
                />
                <FormControlLabel control={
                    <Controller 
                        name="ADHD" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="ADHD" 
                />
                <FormControlLabel control={
                    <Controller 
                        name="PTSD" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="PTSD" 
                />  
                <FormControlLabel control={
                    <Controller 
                        name="Anxiety" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="Anxiety" 
                />    
                <FormControlLabel control={
                    <Controller 
                        name="Eating" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="Eating disorders" 
                />
                <FormControlLabel control={
                    <Controller 
                        name="Insomnia" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="Insomnia" 
                />  
                <FormControlLabel control={
                    <Controller 
                        name="Borderline" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="Borderline Personality Disorder" 
                />  
                <FormControlLabel control={
                    <Controller 
                        name="Addiction" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="Addiction / Substance Abuse" 
                />                                    
            </FormGroup>

            <FormLabel component="legend">Your kinks</FormLabel>
            <FormGroup>
                <FormControlLabel control={
                    <Controller 
                        name="BDSM" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="BDSM" 
                />
                <FormControlLabel control={
                    <Controller 
                        name="Ropeplay" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="Ropeplay" 
                />
                <FormControlLabel control={
                    <Controller 
                        name="Bestiality" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="Bestiality" 
                />
                <FormControlLabel control={
                    <Controller 
                        name="Voyeurism" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="Voyeurism" 
                />
                <FormControlLabel control={
                    <Controller 
                        name="Exhibitionism" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="Exhibitionism" 
                />  
                <FormControlLabel control={
                    <Controller 
                        name="Roleplay" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="Roleplay" 
                />    
                <FormControlLabel control={
                    <Controller 
                        name="Watersports" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="Watersports" 
                />
                <FormControlLabel control={
                    <Controller 
                        name="Humiliation" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="Humiliation" 
                />  
                <FormControlLabel control={
                    <Controller 
                        name="Cuckolding" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="Cuckolding" 
                />  
                <FormControlLabel control={
                    <Controller 
                        name="Femdom" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="Femdom" 
                /> 
                <FormControlLabel control={
                    <Controller 
                        name="CNC" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="CNC" 
                />   
                <FormControlLabel control={
                    <Controller 
                        name="Scat" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="Scat" 
                />                                     
            </FormGroup>

            <FormLabel component="legend">What are you looking for?</FormLabel>
            <FormGroup>
                <FormControlLabel control={
                    <Controller 
                        name="SFW" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="Safe for work chat" 
                />
                <FormControlLabel control={
                    <Controller 
                        name="Gaming" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="Gaming" 
                />
                <FormControlLabel control={
                    <Controller 
                        name="VC" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="Voice Chat" 
                />
                <FormControlLabel control={
                    <Controller 
                        name="Video" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="SFW Video Chat" 
                />
                <FormControlLabel control={
                    <Controller 
                        name="Pic" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="Pic exchange" 
                />  
                <FormControlLabel control={
                    <Controller 
                        name="Sexting" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="Sexting" 
                />    
                <FormControlLabel control={
                    <Controller 
                        name="Penpals" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="Pen pals" 
                />
                <FormControlLabel control={
                    <Controller 
                        name="NSFWVC" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="NSFW Video Chat" 
                />  
                <FormControlLabel control={
                    <Controller 
                        name="ERP" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="ERP" 
                />  
                <FormControlLabel control={
                    <Controller 
                        name="IRL" 
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <Checkbox checked={value} onChange={onChange}/>
                    )}/>} label="Meeting IRL" 
                />                   
            </FormGroup>
            <Controller
                    name="Online"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value } }) => (
                        <>
                            <InputLabel id="demo-simple-select-label">When are you online?</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Online"
                                onChange={onChange}
                                value={value}
                            >
                                <MenuItem value={"Most of the day"}>Most of the day</MenuItem>
                                <MenuItem value={"In the morning"}>In the morning</MenuItem>
                                <MenuItem value={"Afternoon"}>Afternoon</MenuItem>
                                <MenuItem value={"Evening"}>Evening</MenuItem>
                                <MenuItem value={"A couple of times a week"}>A couple of times a week</MenuItem>
                                <MenuItem value={"Rarely"}>Rarely</MenuItem>
                            </Select> 
                        </>
                    )}
                />
        </>
    )
}