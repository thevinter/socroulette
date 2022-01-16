/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import CreatableSelect from 'react-select/creatable';

export default function TagSelect({ setKinks }) {
  const [value, setValue] = useState([]);
  const [input, setInput] = useState('');

  const createOption = (label) => ({
    label,
    value: label,
  });

  const components = {
    DropdownIndicator: null,
  };

  useEffect(() => {
    setKinks(value?.map((option) => option.value));
  }, [value]);

  const handleKeyDown = (event) => {
    if (!input) return;
    switch (event.key) {
      case 'Enter':
      case ',':
        setValue((old) => [...old, createOption(input)]);
        setInput('');
        event.preventDefault();
    }
  };

  return (
    <CreatableSelect
      isClearable
      value={value}
      components={components}
      options={value}
      inputValue={input}
      menuIsOpen={false}
      onChange={(v) => {
        console.log(v);
        setValue(v);
      }}
      isMulti
      onInputChange={(input) => {
        setInput(input);
      }}
      onKeyDown={handleKeyDown}
    />
  );
}
