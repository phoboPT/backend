import { integer, relationship, text, timestamp } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Sale = list({
  //TODO
  //access:

  fields: {
    article: relationship({ ref: 'Article', many: true }),
    price: integer(),
    currency: relationship({ ref: 'Currency' }),
    quantity: integer(),
    unit: relationship({ ref: 'Unit' }),
    shipping: relationship({ ref: 'Shipping' }),
    aditionalShipping: integer(),
    trakingNumber: relationship({ ref: 'TrackingNumber' }),
    tax: relationship({ ref: 'Tax' }),
    note: text(),
    license: relationship({ ref: 'License' }),

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
