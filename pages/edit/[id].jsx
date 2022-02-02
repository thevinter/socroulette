import styles from '../../styles/Home.module.css';
import Contacts from '../../components/contacts';
import { useState, useEffect, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FormControlLabel, Checkbox } from '@mui/material';
import Sex from '../../components/sex';
import Sexuality from '../../components/sexuality';
import Generalities from '../../components/generalities';
import Status from '../../components/status';
import Geography from '../../components/geography';
import Checkboxes from '../../components/checkboxes';
import axios from 'axios';
import useSWR from 'swr';
import Link from 'next/link';
import { useRouter } from 'next/router';

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Home() {
  const router = useRouter();
  const { data } = useSWR(`/api/private-user?id=${router.query.id}`, fetcher);
  const {
    setFocus,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm({ shouldFocusError: true });

  function getEthnicity(data) {
    let eth = [];
    if (data.White) eth.push('White');
    if (data.Hispanic) eth.push('Hispanic');
    if (data.Black) eth.push('Black or African American');
    if (data.EAsian) eth.push('East Asian');
    if (data.WAsian) eth.push('West Asian');
    if (data.Hawaiian) eth.push('Native Hawaiian or Other Pacific Islander');
    if (data.Indian) eth.push('American Indian or Alaska Native');
    return eth;
  }

  function getIllnesses(data) {
    let eth = [];
    if (data.Schizophrenia) eth.push('Schizophrenia');
    if (data.BPD) eth.push('Bipolar Disorder');
    if (data.Depression) eth.push('Depression');
    if (data.ADHD) eth.push('ADHD');
    if (data.PTSD) eth.push('PTSD');
    if (data.Anxiety) eth.push('Anxiety');
    if (data.Eating) eth.push('Eating disorders');
    if (data.Insomnia) eth.push('Insomnia');
    if (data.Borderline) eth.push('Borderline Personality Disorder');
    if (data.Addiction) eth.push('Addiction / Substance Abuse');
    return eth;
  }

  function getKinks(data) {
    let eth = [];
    if (data.BDSM) eth.push('BDSM');
    if (data.Ropeplay) eth.push('Ropeplay');
    if (data.Roleplay) eth.push('Roleplay');
    if (data.Bestiality) eth.push('Bestiality');
    if (data.Voyeurism) eth.push('Voyeurism');
    if (data.Exhibitionism) eth.push('Exhibitionism');
    if (data.Watersports) eth.push('Watersports');
    if (data.Humiliation) eth.push('Humiliation');
    if (data.Cuckolding) eth.push('Cuckolding');
    if (data.Femdom) eth.push('Femdom');
    if (data.CNC) eth.push('CNC');
    if (data.Scat) eth.push('Scat');
    return eth;
  }

  function getGoal(data) {
    let eth = [];
    if (data.SFW) eth.push('Safe for work chat');
    if (data.Gaming) eth.push('Gaming');
    if (data.VC) eth.push('Voice Chat');
    if (data.Video) eth.push('SFW Video Chat');
    if (data.Pic) eth.push('Pic exchange');
    if (data.Sexting) eth.push('Sexting');
    if (data.Penpals) eth.push('Pen pals');
    if (data.NSFWVC) eth.push('NSFW Video Chat');
    if (data.ERP) eth.push('ERP');
    if (data.LTR) eth.push('Long Term Relationship');
    if (data.IRL) eth.push('Meeting IRL');
    return eth;
  }

  const [kinks, setKinks] = useState([]);

  useEffect(() => {
    const firstError = Object.keys(errors).reduce((field, a) => {
      return errors[field] ? field : a;
    }, null);
    if (firstError) {
      setFocus(firstError);
    }
  }, [errors, setFocus]);
  if (!data)
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: 50,
        }}
      >
        <h1>Loading or User not found</h1>
      </div>
    );

  const onSubmit = (data) => {
    const user = {
      contacts: {
        kik: data.Kik,
        discord: data.Discord,
        snapchat: data.Snapchat,
        email: data.Email,
        telegram: data.Telegram,
      },
      sex: data.Sex,
      gender: data.Gender,
      sexuality: data.Sexuality,
      orientation: data.Orientation,
      relstatus: data['Relationship Status'],
      age: parseInt(data.Age),
      ethnicity: getEthnicity(data),
      btype: data.BodyType,
      height: parseInt(data.Height),
      hair: data.Hair,
      skin: data.Skin,
      employment: data.Employment,
      religion: data.Religion,
      politic: data['Political Beliefs'],
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
      music: data.Music,
      books: data.Books,
      movies: data.Movies,
      boards: data.Boards,
      uuid: router.query.id,
      bio: data.Bio,
    };
    axios.patch('/api/user', user).then(() => {
      router.push(`/modified`);
    });
    console.log(data);
    console.log(user);
  };

  return (
    <div>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div style={{ marginTop: '40px', width: '70%' }}>
          <h1 style={{ alignSelf: 'flex-start' }}>Enter your data here:</h1>
        </div>
        <fieldset style={{ marginTop: '3rem', width: '70%' }}>
          <legend>Contacts:</legend>
          <Contacts control={control} user={data} getValues={getValues} />
          {errors.Kik && <div className="error">Please enter at least a value</div>}
        </fieldset>
        <fieldset style={{ marginTop: '3rem', width: '70%' }}>
          <legend>Sexuality:</legend>
          <Sex control={control} user={data} errors={errors} />
          <Sexuality control={control} user={data} errors={errors} />
        </fieldset>
        <fieldset style={{ marginTop: '3rem', width: '70%' }}>
          <legend>Physical info:</legend>
          <Generalities control={control} user={data} errors={errors} />
        </fieldset>
        <fieldset style={{ marginTop: '3rem', width: '70%' }}>
          <legend>Social info:</legend>
          <Status control={control} user={data} errors={errors} />
        </fieldset>
        <fieldset style={{ marginTop: '3rem', width: '70%' }}>
          <legend>Location info:</legend>
          <Geography control={control} user={data} errors={errors} />
        </fieldset>
        <fieldset style={{ marginTop: '3rem', width: '70%' }}>
          <legend>Miscellaneous:</legend>
          <Checkboxes setKinks={setKinks} user={data} control={control} errors={errors} />
        </fieldset>
        <div className={styles.buttonWrapper}>
          <button className={styles.btn} type="submit">
            <span>CONFIRM</span>
          </button>
        </div>
      </form>
    </div>
  );
}
