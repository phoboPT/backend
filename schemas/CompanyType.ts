import { relationship, text, timestamp } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const CompanyType = list({
  // TODO
  // access:

  fields: {
    name: text(),
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
