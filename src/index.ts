import dotenv from 'dotenv';
import { resolve } from 'path';

const config = dotenv.config({ path: resolve('../', '.env') });
console.log('config', config);

import { Options } from 'graphql-yoga';
import { createConnection } from 'typeorm';
import app from './app';
import connectionOptions from './ormConfig';

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT: string = '/playground';
const GRAPHQL_ENDPOINT: string = '/graphql';

const appOptions: Options = {
  port: PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT,
};

const handleAppStart = () => console.log(`🚀Listening on port ${PORT}`);

console.log('begin connection');

createConnection(connectionOptions)
  .then(() => {
    console.log('end connection');
    app.start(appOptions, handleAppStart);
  })
  .catch(error => console.log(error));
