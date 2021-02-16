import { integer, relationship, text, timestamp } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Stock = list({
  //TODO
  //access:

  fields: {
    article: relationship({ ref: 'Article' }),
    quantity: integer(),
    quantityReserved: integer(),
    unit: relationship({ ref: 'Unit' }),
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
