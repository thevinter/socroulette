/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import CreatableSelect from 'react-select/creatable';

export default function TagSelect({ setKinks }) {
  const [a, setA] = useState('a');
  const [b, setB] = useState('b');
  console.log(a);
  console.log(b);

  function handleClickWithoutPromise() {
    setA('aa');
    setB('bb');
  }

  return (
    <>
      <button onClick={handleClickWithoutPromise}>press me</button>
    </>
  );
}
