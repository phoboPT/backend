import {
  integer,
  relationship,
  select,
  text,
  timestamp,
} from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Purchase = list({
  // TODO: access
  fields: {
    article: relationship({ ref: 'Article', many: true }),
    price: integer(),
    currency: relationship({ ref: 'Currency' }),
    quantity: integer(),
    unit: relationship({ ref: 'Unit' }),
    shipping: relationship({ ref: 'Shipping' }),
    trakingNumber: relationship({ ref: 'TrackingNumber' }),
    seller: text(),
    purchaseLink: text(),
    note: text(),
    tax: relationship({ ref: 'Tax' }),
    license: relationship({ ref: 'License' }),

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
  },
});
