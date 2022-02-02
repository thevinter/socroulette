import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import styles from './contacts.module.css';

export default function Contacts({ user, control, getValues, errors }) {
  console.log(user);
  return (
    <div className={styles.inputList}>
      <div className={styles.input}>
        <Controller
          name="Kik"
          control={control}
          defaultValue={user ? user.contacts.kik : ''}
          rules={{
            validate: (value) =>
              getValues('Kik') != '' ||
              getValues('Telegram') != '' ||
              getValues('Discord') != '' ||
              getValues('Snapchat') != '' ||
              getValues('Email') != '',
          }}
          render={({ field: { onChange, value, ref } }) => (
            <TextField
              value={value}
              inputRef={ref}
              onChange={onChange}
              id="outlined-basic"
              label="Kik"
              variant="outlined"
            />
          )}
        />
      </div>
      <div className={styles.input}>
        <Controller
          name="Discord"
          control={control}
          defaultValue={user ? user.contacts.discord : ''}
          rules={{
            validate: () =>
              getValues('Kik') != '' ||
              getValues('Telegram') != '' ||
              getValues('Discord') != '' ||
              getValues('Snapchat') != '' ||
              getValues('Email') != '',
          }}
          render={({ field: { onChange, ref, value } }) => (
            <TextField
              value={value}
              inputRef={ref}
              onChange={onChange}
              id="outlined-basic"
              label="Discord"
              variant="outlined"
            />
          )}
        />
      </div>
      <div className={styles.input}>
        <Controller
          name="Telegram"
          control={control}
          defaultValue={user ? user.contacts.telegram : ''}
          rules={{
            validate: () =>
              getValues('Kik') != '' ||
              getValues('Telegram') != '' ||
              getValues('Discord') != '' ||
              getValues('Snapchat') != '' ||
              getValues('Email') != '',
          }}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              id="outlined-basic"
              label="Telegram"
              variant="outlined"
            />
          )}
        />
      </div>
      <div className={styles.input}>
        <Controller
          name="Snapchat"
          control={control}
          defaultValue={user ? user.contacts.snapchat : ''}
          rules={{
            validate: () =>
              getValues('Kik') != '' ||
              getValues('Telegram') != '' ||
              getValues('Discord') != '' ||
              getValues('Snapchat') != '' ||
              getValues('Email') != '',
          }}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              id="outlined-basic"
              label="Snapchat"
              variant="outlined"
            />
          )}
        />
      </div>
      <div className={styles.input}>
        <Controller
          name="Email"
          control={control}
          defaultValue={user ? user.contacts.email : ''}
          rules={{
            validate: () =>
              getValues('Kik') != '' ||
              getValues('Telegram') != '' ||
              getValues('Discord') != '' ||
              getValues('Snapchat') != '' ||
              getValues('Email') != '',
          }}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          )}
        />
      </div>
    </div>
  );
}
