import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import CheckboxGroup from './checkboxgroup';
import RangeSlider from './range';
import { useRange, useTristate, returnSelected, returnExcluded, Pair } from './utils';

function useBinaryPropertiesSection(section: Record<string, string[]>) {
  const sectionItems = Object.entries(section).map(([groupName, elements]) => {
    // this useTristate is in practice deterministically called
    // as long as this hook is, and the provided data/property is always the same
    // so it's ok to do this i think
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, items] = useTristate(elements);
    return {
      state: state,
      name: groupName,
      items: items,
    };
  });
  return sectionItems;
}

function useRanges(ranges: Record<string, Pair<number>>) {
  const rangeItems = Object.entries(ranges).map(([name, range]) => {
    // this useRange is in practice deterministically called
    // as long as this hook is, and the provided data/property is always the same
    // so it's ok to do this i think
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setter] = useRange(range);
    return {
      name: name,
      state: state,
      range: range,
      setter: setter,
    };
  });
  return rangeItems;
}

export default function FilterSection({ setFilters, data, name }) {
  const rangeItems = useRanges(data.ranges);
  const binpropItems = useBinaryPropertiesSection(data.binaryProps);

  useEffect(
    () =>
      setFilters((old) => {
        const updated = { ...old };
        rangeItems.forEach((i) => {
          updated[i.name] = i.state;
        });
        binpropItems.forEach((i) => {
          updated.selected[i.name] = returnSelected(i.state);
          updated.excluded[i.name] = returnExcluded(i.state);
        });
        return updated;
      }),
    [setFilters, ...rangeItems.map((i) => i.state), ...binpropItems.map((i) => i.state)]
  );

  const [open, setOpen] = useState(false);
  const accordionColor = open ? '#FFF' : '#FFF';

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
        {rangeItems.map((item) => (
          <RangeSlider
            key={item.name}
            label={item.name}
            range={item.range}
            value={item.state}
            onChange={item.setter}
          />
        ))}
        {binpropItems.map((item) => (
          <CheckboxGroup key={item.name} legend={item.name} items={item.items} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
