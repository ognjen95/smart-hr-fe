import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { relayStylePagination } from '@apollo/client/utilities';
import { withScalars } from 'apollo-link-scalars';
import { addMinutes } from 'date-fns';
import { buildClientSchema, IntrospectionQuery } from 'graphql';
// import { getSession } from 'next-auth/react';

import rawSchema from '../../gql.schema.json';

import { StrictTypedTypePolicies } from '~graphql-api';

const schema = buildClientSchema(rawSchema as unknown as IntrospectionQuery);

const typesMap = {
  DateTime: {
    serialize: (parsed: unknown): unknown => parsed,
    parseValue: (raw: unknown): Date | null =>
      raw ? new Date(raw as string) : null,
  },
  Date: {
    serialize: (parsed: unknown): unknown =>
      addMinutes(parsed as Date, (parsed as Date).getTimezoneOffset() * -1),
    parseValue: (raw: unknown): Date | null =>
      raw ? new Date(raw as string) : null,
  },
};

const authLink = setContext((_, { headers }) => {
  let data;

  if (!data) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return headers;
  }

  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    headers: {
      ...headers,
      // authorization: `Bearer ${data.idToken}`,
    },
  };
});

const httpLink = ApolloLink.from([
  withScalars({ schema, typesMap }),
  new HttpLink({
    uri: 'http://localhost:3001/graphql',
  }),
]);

const typePolicies: StrictTypedTypePolicies = {
  Query: {
    fields: {
      // findAllUsers: relayStylePagination(),
    },
  },
};

const cache = new InMemoryCache({
  // possibleTypes: introspectionResult.possibleTypes,
  typePolicies,
});

function createApolloClient() {
  return new ApolloClient<object>({
    link: authLink.concat(httpLink),
    cache,
  });
}

export default createApolloClient;
