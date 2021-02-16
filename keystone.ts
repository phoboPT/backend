import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { createAuth } from '@keystone-next/auth';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { Article } from './schemas/Article';
import { ArticleCategory } from './schemas/ArticleCategory';
import { ArticleSubCategory } from './schemas/ArticleSubCategory';
import { Company } from './schemas/Company';
import { CompanyType } from './schemas/CompanyType';
import { Country } from './schemas/Country';
import { Currency } from './schemas/Currency';
import { CurrencyConversion } from './schemas/CurrencyConversion';
import { Image } from './schemas/Image';
import { Invoice } from './schemas/Invoice';
import { InvoiceType } from './schemas/InvoiceType';
import { License } from './schemas/License';
import { Order } from './schemas/Order';
import { Purchase } from './schemas/Purchase';
import { Sale } from './schemas/Sale';
import { Shipping } from './schemas/Shipping';
import { Stock } from './schemas/Stock';
import { Tax } from './schemas/Tax';
import { TrackingNumber } from './schemas/TrackingNumber';
import { Token } from './schemas/Token';
import { Unit } from './schemas/Unit';
import { UnitConversion } from './schemas/UnitConversion';
import { User } from './schemas/User';
import { UserDetail } from './schemas/UserDetail';
import { UserDetailType } from './schemas/UserDetailType';

const databaseURL = process.env.DATABASE_URL;

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  secret: process.env.COOCKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    //TODO: add initial roles here
  },
});

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
    },
    lists: createSchema({
      Article,
      ArticleCategory,
      ArticleSubCategory,
      Company,
      CompanyType,
      Country,
      Currency,
      CurrencyConversion,
      Image,
      Invoice,
      InvoiceType,
      License,
      Order,
      Purchase,
      Sale,
      Shipping,
      Stock,
      Tax,
      Token,
      TrackingNumber,
      Unit,
      UnitConversion,
      User,
      UserDetail,
      UserDetailType,
    }),
    ui: {
      isAccessAllowed: ({ session }) => {
        return !!session?.data;
      },
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: 'id',
    }),
  })
);
