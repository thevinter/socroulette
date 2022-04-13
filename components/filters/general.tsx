import { FilterData } from './utils';

export const data: FilterData = {
  ranges: {
    age: {
      displayLabel: 'Age',
      value: [18, 100],
    },
  },
  binaryProps: {
    sex: { displayLabel: 'Sex at birth', value: ['Male', 'Female', 'Other'] },
    gender: { displayLabel: 'Gender they identify with', value: ['Male', 'Female', 'Other'] },
    orientation: { displayLabel: 'Their orientation', value: ['Polygamous', 'Monogamous'] },
    status: {
      displayLabel: 'Desired status',
      value: ['Single', 'Widowed', 'Divorced', 'Married', 'Single parent', 'Engaged'],
    },
    sexuality: {
      displayLabel: 'Desired Sexuality',
      value: ['Heterosexual', 'Homosexual', 'Bisexual', 'Asexual', 'Other'],
    },
  },
};
