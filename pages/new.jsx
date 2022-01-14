import Head from 'next/head'
import Image from 'next/image'
import TextField from '@mui/material/TextField'
import { FormLabel, FormGroup, Checkbox, RadioGroup, FormControlLabel, Radio, InputLabel, Select, MenuItem } from '@mui/material'
import styles from '../styles/Home.module.css'
import Contacts from '../components/contacts'
import { useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import Sex from '../components/sex'
import Sexuality from '../components/sexuality'
import Generalities from '../components/generalities';
import Status from '../components/status';
import Geography from '../components/geography'
import Checkboxes from '../components/checkboxes'
import axios from 'axios'
import { useRouter } from 'next/router';


export default function Home() {

  const router = useRouter();

  function getEthnicity(data) {
    let eth = [];
    if (data.White) eth.push("White");
    if (data.Hispanic) eth.push("Hispanic");
    if (data.Black) eth.push("Black or African American");
    if (data.EAsian) eth.push("East Asian");
    if (data.WAsian) eth.push("West Asian");
    if (data.Hawaiian) eth.push("Native Hawaiian or Other Pacific Islander");
    if (data.Indian) eth.push("American Indian or Alaska Native");
    return eth;
  }

  function getIllnesses(data) {
    let eth = [];
    if (data.Schizofrenia) eth.push("Schizofrenia");
    if (data.BPD) eth.push("Bipolar Disorder");
    if (data.Depression) eth.push("Depression");
    if (data.ADHD) eth.push("ADHD");
    if (data.PTSD) eth.push("PTSD");
    if (data.Anxiety) eth.push("Anxiety");
    if (data.Eating) eth.push("Eating disorders");
    if (data.Insomnia) eth.push("Insomnia");
    if (data.Borderline) eth.push("Borderline Personality Disorder");
    if (data.Addiction) eth.push("Addiction / Substance Abuse");
    return eth;
  }

  function getKinks(data) {
    let eth = [];
    if (data.BDSM) eth.push("BDSM");
    if (data.Ropeplay) eth.push("Ropeplay");
    if (data.Bestiality) eth.push("Bestiality");
    if (data.Voyeurism) eth.push("Voyeurism");
    if (data.Exhibitionism) eth.push("Exhibitionism");
    if (data.Watersports) eth.push("Watersports");
    if (data.Humiliation) eth.push("Humiliation");
    if (data.Cuckolding) eth.push("Cuckolding");
    if (data.Femdom) eth.push("Femdom");
    if (data.CNC) eth.push("CNC");
    if (data.Scat) eth.push("Scat");
    return eth;
  }

  function getGoal(data) {
    let eth = [];
    if (data.SFW) eth.push("Safe for work chat");
    if (data.Gaming) eth.push("Gaming");
    if (data.VC) eth.push("Voice Chat");
    if (data.Video) eth.push("SFW Video Chat");
    if (data.Pic) eth.push("Pic exchange");
    if (data.Sexting) eth.push("Sexting");
    if (data.Penpals) eth.push("Pen pals");
    if (data.NSFWVC) eth.push("NSFW Video Chat");
    if (data.ERP) eth.push("ERP");
    if (data.IRL) eth.push("Meeting IRL");
    return eth;
  }

  const [kinks, setKinks] = useState([]);

  const {handleSubmit, control} = useForm();
  const onSubmit = data => {
    const user = {
      contacts: {
        kik: data.Kik,
        discord: data.Discord,
        snapchat: data.Snapchat,
        email: data.Email,
        telegram: data.Telegram
      },
      sex: data.Sex,
      gender: data.Gender,
      sexuality: data.Sexuality,
      orientation: data.Orientation,
      relstatus: data.Relationship,
      age: parseInt(data.Age),
      ethnicity: getEthnicity(data),
      btype: data.BodyType,
      height: parseInt(data.Height),
      hair: data.Hair,
      skin: data.Skin,
      employment: data.Employment,
      religion: data.Religion,
      politic: data.Political,
      location: data.Location,
      timezone: data.Timezone,
      mental: getIllnesses(data),
      kinks: getKinks(data),
      extraKinks: kinks,
      lf: getGoal(data),
      country: data.Country,
      online: data.Online,
      interests: data.Interests,
      games: data.Games,
      flags: data.Flags,
      nowrite: data.No,
      bio: data.Bio
    }
    axios.post('/api/add-user', user).then(res => {
      router.push(`/success/${res.data}`);
    })
    console.log(data)
    console.log(user)
  }

  return (
    <div >

      <form style={{display: "flex", flexDirection: "column", alignItems: "center"}} onSubmit={handleSubmit(onSubmit)}>
        <div style={{marginTop: "40px", width: "70%"}}><h1 style={{alignSelf: "flex-start"}}>Enter your data here:</h1></div>
        <fieldset style={{marginTop: "3rem", width: "70%"}}>
          <legend>Contacts:</legend>
          <Contacts control={control} />
        </fieldset>
        <fieldset style={{marginTop: "3rem", width: "70%"}}>
          <legend>Sexuality:</legend>
          <Sex control={control} />
          <Sexuality control={control} />
        </fieldset>
        <fieldset style={{marginTop: "3rem", width: "70%"}}>
          <legend>Physical info:</legend>
          <Generalities control={control} />
        </fieldset>
        <fieldset style={{marginTop: "3rem", width: "70%"}}>
          <legend>Social info:</legend>
          <Status control={control} />
        </fieldset>
        <fieldset style={{marginTop: "3rem", width: "70%"}}>
          <legend>Location info:</legend>
          <Geography control={control} />
        </fieldset>
        <fieldset style={{marginTop: "3rem", width: "70%"}}>
          <legend>Miscellaneous:</legend>
          <Checkboxes setKinks={setKinks} control={control} />
        </fieldset>
        <div className={styles.buttonWrapper}>
          <button className={styles.btn} type="submit"><span>SUBMIT</span></button>
        </div>
      </form>
    </div>
  )
}

