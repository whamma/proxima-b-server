import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({ path: resolve('../', '.env') });

import { Options } from 'graphql-yoga';
import app from './app';

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT: string = '/playground';
const GRAPHQL_ENDPOINT: string = '/graphql';

const appOptions: Options = {
  port: PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT,
};

const handleAppStart = () => console.log(`🚀Listening on port ${PORT}`);

app.start(appOptions, handleAppStart);
