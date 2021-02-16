import { list } from '@keystone-next/keystone/schema';
import { integer, relationship, text, timestamp } from '@keystone-next/fields';

export const Order = list({
  //acess:
  //ui
  fields: {
    article: relationship({ ref: 'Article', many: true }),
    quantity: integer(),
    unit: relationship({ ref: 'Unit' }),
    orderPrice: integer(),
    shipping: text(),
    receivedPayment: text(),
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
