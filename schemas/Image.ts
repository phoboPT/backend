import 'dotenv/config';
import { text, timestamp } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { cloudinaryImage } from '@keystone-next/cloudinary';
// import { isSignedIn, permissions } from '../access';

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'stock',
};

export const Image = list({
  //   access: {
  //     create: isSignedIn,
  //     read: () => true,
  //     update: permissions.canManageProducts,
  //     delete: permissions.canManageProducts,
  //   },
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: 'Source',
    }),
    altText: text(),
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
