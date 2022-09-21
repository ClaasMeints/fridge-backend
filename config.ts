import { Dialect } from 'sequelize/types';

export const config = {
  database: {
    repositoryMode: true,
    dialect: 'postgres' as Dialect,
    host: process.env.POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    database: process.env.POSTGRES_DB || 'fridge_content',
    define: {
      timestamps: false,
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
      deletedAt: false,
    },
  },
  jwtPrivateKey: 'jwtPrivateKey',
};
