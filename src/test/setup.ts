import React from 'react';
import 'vitest-dom/extend-expect';
import { server } from './mocks/server';

global.React = React;

server.events.on('request:start', ({ request }) => {
  console.info('MSW intercepted:', request.method, request.url);
});

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
