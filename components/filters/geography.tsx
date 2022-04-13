import { FilterData } from './utils';

function tzFormat(value) {
  if (value > 0) value = '+' + value;
  return `UTC${value}:00`;
}

export const data: FilterData = {
  ranges: {
    timezone: {
      displayLabel: 'Timezone',
      value: [-12, 14],
      extraProps: {
        valueLabelFormat: tzFormat,
      },
    },
  },
  binaryProps: {
    location: {
      displayLabel: 'Zone of residence',
      value: [
        'Eastern Europe',
        'Western Europe',
        'East Asia',
        'West Asia',
        'Australia/NZ/Oceania',
        'North America',
        'South America',
        'Africa',
      ],
    },
  },
};
