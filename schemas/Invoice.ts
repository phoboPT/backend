import { relationship, text, timestamp } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Invoice = list({
  //TODO
  //access:

  fields: {
    type: relationship({ ref: 'InvoiceType' }),
    userDetails: relationship({ ref: 'UserDetail' }),
    purchase: relationship({ ref: 'Purchase' }),
    sale: relationship({ ref: 'Sale' }),
    image: relationship({ ref: 'Image' }),

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
