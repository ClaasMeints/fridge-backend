import { Sequelize } from 'sequelize-typescript';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST || 'localhost',
        port: parseInt(process.env.POSTGRES_PORT) || 5432,
        username: process.env.POSTGRES_USER || 'postgres',
        password: process.env.POSTGRES_PASSWORD || 'postgres',
        database: process.env.POSTGRES_DB || 'fridge_content',
        models: [
          'device',
          'device_content',
          'fridge_user',
          'fridge_user_device_relation',
          'product',
          'product_category',
          'product_class',
          'required_content',
          'shopping_list',
          'unit',
        ],
      });
      await sequelize.sync();
      return sequelize;
    },
  },
];
