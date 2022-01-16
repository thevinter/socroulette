import { FilterData } from './utils';

export const data: FilterData = {
  ranges: {
    age: [18, 100],
  },
  binaryProps: {
    sex: ['Male', 'Female', 'Other'],
    gender: ['Male', 'Female', 'Other'],
    orientation: ['Polygamous', 'Monogamous'],
    status: ['Single', 'Widowed', 'Divorced', 'Married', 'Single parent', 'Engaged'],
    sexuality: ['Heterosexual', 'Homosexual', 'Bisexual', 'Asexual', 'Other'],
  },
};
