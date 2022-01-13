import Select from "react-select"
import { Controller } from "react-hook-form"

export default function MultiSelector({ options, name, placeholder, form, control, defaultValue }) {
  return ( 
      <Controller
        control={control}
        register={form}
        defaultValue= {defaultValue}
        name={name}
        render={({ field: {onChange,value ,onBlur} }) => (
          <Select
            isMulti
            options={options}
            placeholder={placeholder}
            onChange={(values) =>
              onChange(values?.map((option) => option.value))
            }
            onBlur={onBlur}
            value={options.filter((option) => value?.includes(option.value))}
            defaultValue={options.filter((option) =>
              value?.includes(option.value)
            )}
          />
        )}
      />
  )
}