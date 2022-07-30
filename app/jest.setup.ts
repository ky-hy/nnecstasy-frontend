import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import apolloClient from '@/libs/apollo';

import { server } from './mocks/server';

beforeAll(() => {
  server.listen();
});

afterEach(async () => {
  server.resetHandlers();
  jest.clearAllMocks();
});

beforeEach(() => {
  return apolloClient.clearStore();
});

afterAll(() => {
  server.close();
});
