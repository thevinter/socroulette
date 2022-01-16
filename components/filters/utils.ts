import { useState, useEffect, useCallback, Dispatch, SetStateAction } from 'react';

export type Pair<T> = [T, T];
export type SetStateDispatch<T> = Dispatch<SetStateAction<T>>;
export type FilterData = {
  ranges: Record<string, Pair<number>>;
  binaryProps: Record<string, string[]>;
};
export type TristateItem = {
  onChange: (value: number) => void;
  name: string;
};

export function useRange([min, max]: Pair<number>): [Pair<number>, SetStateDispatch<Pair<number>>] {
  const [value, setter] = useState([min, max]);
  return [value as [number, number], setter];
}

export function useTristate(elements: string[]): [Record<string, number>, TristateItem[]] {
  const obj = Object.fromEntries(elements.map((v) => [v, 0]));
  const [val, setter] = useState(obj);
  const changer = useCallback(
    (idx: string, value: number) => setter((state) => ({ ...state, [idx]: value })),
    [setter]
  );
  const items = elements.map((item) => ({
    name: item,
    // this useCallback is in practice deterministically called
    // as long as this hook is, and the provided data/property is always the same
    // so it's ok to do this i think
    // eslint-disable-next-line react-hooks/rules-of-hooks
    onChange: useCallback((newvalue) => changer(item, newvalue), [changer, item]),
  }));

  return [val, items];
}

export function returnSelected(obj: Record<string, number>) {
  return Object.entries(obj)
    .filter(([_key, val]) => val === 1)
    .map(([key, _val]) => key);
}

export function returnExcluded(obj: Record<string, number>) {
  return Object.entries(obj)
    .filter(([_key, val]) => val === 2)
    .map(([key, _val]) => key);
}
