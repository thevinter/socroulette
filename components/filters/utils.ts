import { useState, useEffect, useCallback, Dispatch, SetStateAction, useMemo } from 'react';
import { TristateProps, TriCheckbox } from './../newtricheck';

export type Pair<T> = [T, T];
export type SetStateDispatch<T> = Dispatch<SetStateAction<T>>;
export type ObjSetterCallback<T> = (idx: string, val: T) => void;
export type NestedObjSetterCallback<T> = (group: string, idx: string, val: T) => void;
export type FilterItem<T> = {
  displayLabel: string | null;
  value: T;
};
export type FilterGroup<T> = Record<string, FilterItem<T>>;
export type FilterData = {
  lists?: FilterGroup<string[]>;
  ranges: FilterGroup<Pair<number>>;
  binaryProps: FilterGroup<string[]>;
};

export function nullObj(keys: string[]): Record<string, number> {
  return Object.fromEntries(keys.map((v) => [v, 0]));
}

export function useRange(range: Pair<number>): [Pair<number>, SetStateDispatch<Pair<number>>] {
  const [value, setter] = useState(range);
  return [value as [number, number], setter];
}

export function useTristate(
  elements: string[]
): [Record<string, number>, ObjSetterCallback<number>] {
  const [val, setter] = useState(() => nullObj(elements));
  const changer = useCallback(
    (idx: string, value: number) => setter((state) => ({ ...state, [idx]: value })),
    [setter]
  );
  return [val, changer];
}

export function returnSelected(obj: Record<string, number>): string[] {
  return Object.entries(obj)
    .filter(([_key, val]) => val === 1)
    .map(([key, _val]) => key);
}

export function returnExcluded(obj: Record<string, number>): string[] {
  return Object.entries(obj)
    .filter(([_key, val]) => val === 2)
    .map(([key, _val]) => key);
}
