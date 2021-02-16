import { list } from '@keystone-next/keystone/schema';
import {
  text,
  password,
  integer,
  select,
  timestamp,
  relationship,
} from '@keystone-next/fields';

export const User = list({
  // acess:
  // ui
  fields: {
    type: text(),
    email: text({ isRequired: true, isUnique: true }),
    password: password({ isRequired: true }),
    name: text({ isRequired: true }),
    surname: text(),
    age: integer(),
    gender: text(),
    image: relationship({ ref: 'Image' }),
    license: relationship({ ref: 'License.owner' }),
    status: select({
      options: [
        { label: 'Draft', value: 'DRAFT' },
        { label: 'Available', value: 'Available' },
        { label: 'Unavailable', value: 'UNAVAILABLE' },
      ],
      defaultValue: 'DRAFT',
    }),
    updatedAt: timestamp({
      access: { create: false, read: true, update: false },
      hooks: {
        resolveInput: () => new Date().toISOString(),
      },
    }),
    createdAt: timestamp({
      access: { create: false, read: true, update: false },
      defaultValue: () => new Date().toISOString(),
    }),
    // TODO: add more info
  },
});
