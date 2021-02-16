import { relationship, text, timestamp } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const ArticleCategory = list({
  // TODO
  // access:

  fields: {
    name: text(),
    description: text(),
    subCategory: relationship({ ref: 'ArticleSubCategory', many: true }),
    license: relationship({ ref: 'License', many: true }),

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
