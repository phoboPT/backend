import { integer, relationship, text, timestamp } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Shipping = list({
  //TODO
  //access:

  fields: {
    name: text(),
    price: integer(),
    finalPrice: integer(),
    maxWheight: integer(),
    maxSize: integer(),
    lciense: relationship({ ref: 'License' }),

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
    license: relationship({ ref: 'License' }),
  },
});
