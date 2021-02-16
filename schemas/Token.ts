import { relationship, text, timestamp } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Token = list({
  //TODO
  //access:

  fields: {
    type: text(),
    user: relationship({ ref: 'User' }),

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
