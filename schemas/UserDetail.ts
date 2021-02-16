import { integer, relationship, text, timestamp } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const UserDetail = list({
  fields: {
    user: relationship({ ref: 'User' }),
    type: relationship({ ref: 'UserDetailType' }),
    taxId: text(),
    address: text(),
    locale: text(),
    zipCode: text(),
    country: relationship({ ref: 'Country' }),
    phone: integer(),

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
