import { Controller } from 'react-hook-form';
import {
  FormLabel,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
} from '@mui/material';
import RSelect from 'react-select';
import MultiSelector from './multi-select';
import CreatableSelect from 'react-select/creatable';
import TagSelect from './tag-select';
import { useState } from 'react';

const boardList = [
  '/3/',
  '/a/',
  '/aco/',
  '/adv/',
  '/an/',
  '/asp/',
  '/b/',
  '/bant/',
  '/biz/',
  '/c/',
  '/cgl/',
  '/ck/',
  '/cm/',
  '/co/',
  '/d/',
  '/diy/',
  '/e/',
  '/fa/',
  '/fit/',
  '/g/',
  '/gd/',
  '/gif/',
  '/h/',
  '/hc/',
  '/hm/',
  '/hr/',
  '/i/',
  '/ic/',
  '/his/',
  '/int/',
  '/jp/',
  '/k/',
  '/lit/',
  '/lgbt/',
  '/m/',
  '/mlp/',
  '/mu/',
  '/news/',
  '/n/',
  '/o/',
  '/out/',
  '/p/',
  '/po/',
  '/pol/',
  '/pw/',
  '/qst/',
  '/r/',
  '/r9k/',
  '/s4s/',
  '/s/',
  '/sci/',
  '/soc/',
  '/sp/',
  '/t/',
  '/tg/',
  '/toy/',
  '/trash/',
  '/trv/',
  '/tv/',
  '/u/',
  '/v/',
  '/vg/',
  '/vm/',
  '/vmg/',
  '/vip/',
  '/vp/',
  '/vr/',
  '/vrpg/',
  '/vst/',
  '/vt/',
  '/w/',
  '/wg/',
  '/wsg/',
  '/wsr/',
  '/x/',
  '/xs/',
  '/y/',
];

export default function Checkboxes({ control, setKinks }) {
  const [gamer, setGamer] = useState(true);
  const boards = boardList.map((board) => ({ value: board, label: board }));
  return (
    <>
      <FormLabel component="legend">Your mental illnesses (ignore if none apply)</FormLabel>
      <FormGroup
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}
      >
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="Schizophrenia"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="Schizophrenia"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="BPD"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="Bipolar Disorder"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="Depression"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="Depression"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="ADHD"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="ADHD"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="PTSD"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="PTSD"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="Anxiety"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="Anxiety"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="Eating"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="Eating disorders"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="Insomnia"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="Insomnia"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="Borderline"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="Borderline Personality Disorder"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="Addiction"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="Addiction / Substance Abuse"
        />
      </FormGroup>

      <FormLabel component="legend">Your kinks</FormLabel>
      <FormGroup sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="BDSM"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="BDSM"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="Ropeplay"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="Ropeplay"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="Bestiality"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="Bestiality"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="Voyeurism"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="Voyeurism"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="Exhibitionism"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="Exhibitionism"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="Roleplay"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="Roleplay"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="Watersports"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="Watersports"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="Humiliation"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="Humiliation"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="Cuckolding"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="Cuckolding"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="Femdom"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="Femdom"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="CNC"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="CNC"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="Scat"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="Scat"
        />
      </FormGroup>
      <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
        <FormLabel component="legend">Additional kinks? (separated by comma)</FormLabel>
        <TagSelect setKinks={setKinks} />
      </div>
      <FormLabel component="legend">What are you looking for?</FormLabel>
      <FormGroup
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}
      >
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="SFW"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="Safe for work chat"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="Gaming"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox
                  checked={value}
                  onChange={(e) => {
                    setGamer(value);
                    onChange(e);
                  }}
                />
              )}
            />
          }
          label="Gaming"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="VC"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="Voice Chat"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="Video"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="SFW Video Chat"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="Pic"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="Pic exchange"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="Sexting"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="Sexting"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="Penpals"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="Pen pals"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="NSFWVC"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="NSFW Video Chat"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="ERP"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="ERP"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="IRL"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="Meeting IRL"
        />
        <FormControlLabel
          sx={{ flex: '1 1 auto' }}
          control={
            <Controller
              name="LTR"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox checked={value} onChange={onChange} />
              )}
            />
          }
          label="Long Term Relationship"
        />
      </FormGroup>
      <Controller
        name="Online"
        control={control}
        rules={{ required: true }}
        defaultValue=""
        render={({ field: { onChange, ref, value } }) => (
          <FormControl sx={{ width: '100%', marginTop: 2 }}>
            <InputLabel id="demo-simple-select-label">When are you online?</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Online"
              inputRef={ref}
              onChange={onChange}
              value={value}
            >
              <MenuItem value={'Most of the day'}>Most of the day</MenuItem>
              <MenuItem value={'In the morning'}>In the morning</MenuItem>
              <MenuItem value={'Afternoon'}>Afternoon</MenuItem>
              <MenuItem value={'Evening'}>Evening</MenuItem>
              <MenuItem value={'A couple of times a week'}>A couple of times a week</MenuItem>
              <MenuItem value={'Rarely'}>Rarely</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      <p>Optional fields about you:</p>
      {!gamer && (
        <div>
          <Controller
            name="Games"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <FormControl sx={{ width: '100%', marginTop: 2 }}>
                <TextField
                  value={value}
                  onChange={onChange}
                  placeholder="Games I play:"
                  multiline
                  rows={4}
                  maxRows={7}
                />
              </FormControl>
            )}
          />
        </div>
      )}
      <div>
        <Controller
          name="Flags"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <FormControl sx={{ width: '100%', marginTop: 2 }}>
              <TextField
                value={value}
                onChange={onChange}
                placeholder="Potential red flags"
                multiline
                maxRows={7}
              />
            </FormControl>
          )}
        />
      </div>
      <div>
        <Controller
          name="No"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <FormControl sx={{ width: '100%', marginTop: 2 }}>
              <TextField
                value={value}
                onChange={onChange}
                placeholder="Don't write to me if..."
                multiline
                maxRows={7}
              />
            </FormControl>
          )}
        />
      </div>
      <div>
        <Controller
          name="Interests"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <FormControl sx={{ width: '100%', marginTop: 2 }}>
              <TextField
                value={value}
                onChange={onChange}
                placeholder="My interests are..."
                multiline
                maxRows={7}
              />
            </FormControl>
          )}
        />
      </div>
      <div>
        <Controller
          name="Music"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <FormControl sx={{ width: '100%', marginTop: 2 }}>
              <TextField
                value={value}
                onChange={onChange}
                placeholder="Music that I like"
                multiline
                maxRows={7}
              />
            </FormControl>
          )}
        />
      </div>
      <div>
        <Controller
          name="Movies"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <FormControl sx={{ width: '100%', marginTop: 2 }}>
              <TextField
                value={value}
                onChange={onChange}
                placeholder="Movies that I like"
                multiline
                maxRows={7}
              />
            </FormControl>
          )}
        />
      </div>
      <div>
        <Controller
          name="Books"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <FormControl sx={{ width: '100%', marginTop: 2 }}>
              <TextField
                value={value}
                onChange={onChange}
                placeholder="Books that I like"
                multiline
                maxRows={7}
              />
            </FormControl>
          )}
        />
      </div>
      <p>Boards that I follow:</p>
      <div>
        <Controller
          name="Boards"
          control={control}
          defaultValue={[]}
          render={({ field: { ref, onChange, value } }) => (
            <RSelect
              isMulti
              menuPortalTarget={typeof window === 'undefined' ? null : document.body}
              styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
              inputRef={ref}
              options={boards}
              value={boards.filter((c) => value.includes(c.value))}
              onChange={(val) => onChange(val.map((c) => c.value))}
            />
          )}
        />
      </div>
    </>
  );
}
