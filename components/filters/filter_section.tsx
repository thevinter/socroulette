import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { useState, useEffect, useCallback } from 'react';
import CheckboxGroup from './checkboxgroup';
import RangeSlider from './range';
import LongList from './list';
import {
  nullObj,
  useRange,
  useTristate,
  returnSelected,
  returnExcluded,
  Pair,
  FilterData,
  ObjSetterCallback,
  NestedObjSetterCallback,
} from './utils';

type SectionProps = {
  setFilters: any;
  data: FilterData;
  name: string;
};

type SectionState = {
  ranges: Record<string, Pair<number>>;
  binaryProps: Record<string, Record<string, number>>;
  lists: Record<string, string[]>;
};

function updateFilters(old, sectionName: string, sectionState: SectionState) {
  const updated = { ...old };
  Object.entries(sectionState.ranges).forEach(([name, range]) => {
    updated[name] = range;
  });
  Object.entries(sectionState.binaryProps).forEach(([name, values]) => {
    updated.excluded[name] = returnExcluded(values);
    updated.selected[name] = returnSelected(values);
  });
  Object.entries(sectionState.lists).forEach(([name, items]) => {
    updated.selected[name] = items;
  });
  return updated;
}

function useSection(
  data: FilterData
): [
  SectionState,
  ObjSetterCallback<Pair<number>>,
  NestedObjSetterCallback<number>,
  ObjSetterCallback<string[]>
] {
  const stateGen: () => SectionState = () => {
    const propentries = Object.entries(data.binaryProps).map(([name, group]) => [
      name,
      nullObj(group.value),
    ]);
    const ranges = Object.entries(data.ranges).map(([name, range]) => [name, range.value]);
    const lists = Object.keys(data.lists || {}).map((name) => [name, []]);
    return {
      ranges: Object.fromEntries(ranges),
      binaryProps: Object.fromEntries(propentries),
      lists: Object.fromEntries(lists),
    };
  };
  const [sectionState, setState] = useState(stateGen);
  const setRange = useCallback(
    (name, value) =>
      setState((state) => ({
        binaryProps: state.binaryProps,
        lists: state.lists,
        ranges: { ...state.ranges, [name]: value },
      })),
    [setState]
  );
  const setBinprop = useCallback(
    (prop, name, value) =>
      setState((state) => ({
        ranges: state.ranges,
        lists: state.lists,
        binaryProps: {
          ...state.binaryProps,
          [prop]: { ...state.binaryProps[prop], [name]: value },
        },
      })),
    [setState]
  );
  const setLists = useCallback(
    (name, value) =>
      setState((state) => ({
        binaryProps: state.binaryProps,
        ranges: state.ranges,
        lists: { ...state.lists, [name]: value },
      })),
    [setState]
  );
  return [sectionState, setRange, setBinprop, setLists];
}

export default function FilterSection({ setFilters, data, name }: SectionProps) {
  const [open, setOpen] = useState(false);
  const accordionColor = open ? '#FFF' : '#FFF';

  const [sectionState, setRange, setBinprop, setLists] = useSection(data);

  const ranges = Object.entries(data.ranges).map(([name, range]) => (
    <RangeSlider
      key={name}
      id={name}
      label={range.displayLabel}
      range={range.value}
      value={sectionState.ranges[name]}
      onChange={setRange}
      {...range.extraProps}
    />
  ));

  const binprops = Object.entries(data.binaryProps).map(([name, group]) => {
    const items = group.value.map((e) => ({
      name: e,
      value: sectionState.binaryProps[name][e],
    }));
    return (
      <CheckboxGroup
        key={name}
        id={name}
        legend={group.displayLabel}
        onChange={setBinprop}
        items={items}
      />
    );
  });

  const lists = Object.entries(data.lists || {}).map(([name, group]) => (
    <LongList
      key={name}
      id={name}
      label={group.displayLabel}
      itemList={group.value}
      onChange={setLists}
    />
  ));

  useEffect(
    () => setFilters((old) => updateFilters(old, name, sectionState)),
    [setFilters, sectionState, name]
  );

  return (
    <Accordion
      onChange={() => setOpen((s) => !s)}
      sx={{
        transition: 'all .35s',
        border: '1px solid rgb(0,0,0,.2)',
        borderStyle: 'solid none solid none',
        backgroundColor: accordionColor,
      }}
    >
      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
        <Typography>{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {ranges}
        {binprops}
        {lists}
      </AccordionDetails>
    </Accordion>
  );
}
