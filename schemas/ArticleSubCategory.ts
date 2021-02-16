import { relationship, select, text, timestamp } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const ArticleSubCategory = list({
  // TODO
  // access:

  fields: {
    name: text(),
    description: text(),
    license: relationship({ ref: 'License' }),

    status: select({
      options: [
        { label: 'Draft', value: 'DRAFT' },
        { label: 'Available', value: 'Available' },
        { label: 'Unavailable', value: 'UNAVAILABLE' },
      ],
      defaultValue: 'DRAFT',
    }),
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
