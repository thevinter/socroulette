import { FilterData } from './utils';

export const data: FilterData = {
  ranges: { height: { displayLabel: 'Height (cm)', value: [100, 250] } },
  binaryProps: {
    race: {
      displayLabel: 'Ethnicity',
      value: [
        'White',
        'Hispanic',
        'West Asian',
        'East Asian',
        'Native Hawaiian or Other Pacific Islander',
        'Black or African American',
        'American Indian or Alaska Native',
      ],
    },
    body: {
      displayLabel: 'Body Type',
      value: [
        'Skinny/underweight',
        'Average',
        'Hourglass',
        'Lean/fit',
        'Buff/muscular',
        'Chubby',
        'Fat',
        'Obese',
      ],
    },
    hair: {
      displayLabel: 'Hair Color',
      value: ['Blonde', 'Brown', 'Black', 'Red/Ginger', 'White/Gray', 'Shaved', 'Other'],
    },
    skin: {
      displayLabel: 'Skin Color',
      value: [
        'Light, Pale White',
        'White',
        'Medium, White to Olive',
        'Olive, Moderate Brown',
        'Brown, Dark Brown',
        'Black, Very Dark',
      ],
    },
  },
};
