import { integer, text, timestamp } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Tax = list({
  //TODO
  //access:

  fields: {
    name: text({ isRequired: true }),
    percentage: integer({ isRequired: true }),
    observations: text(),

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
