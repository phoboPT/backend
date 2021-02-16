import { integer, relationship, text, timestamp } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const CurrencyConversion = list({
  //TODO
  //access:

  fields: {
    initialCurrency: relationship({ ref: 'Currency' }),
    finalCurrency: relationship({ ref: 'Currency' }),
    rate: integer(),

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
