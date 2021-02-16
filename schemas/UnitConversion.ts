import { integer, text, timestamp } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const UnitConversion = list({
  fields: {
    conversor: text(),
    converted: text(),
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
