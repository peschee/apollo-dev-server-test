import type { ApolloClient, NormalizedCacheObject } from '@apollo/client/core';

import { client } from './client';

window.__APOLLO_CLIENT__ = client;

console.log('Initialized…');

declare global {
  interface Window {
    __APOLLO_CLIENT__?: ApolloClient<NormalizedCacheObject>;
  }
}
