import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from './namingStrategy';

const DB_PORT = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432;
const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: ['entities/**/*.*'],
  host: process.env.DB_HOST,
  port: DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  namingStrategy: new SnakeNamingStrategy(),
};

export default connectionOptions;
