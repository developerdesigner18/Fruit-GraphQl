

import { ApolloServer } from 'apollo-server-express';
import { makeSchema } from 'nexus';
import { join } from 'path';
import { resolvers } from './resolvers';
import { FruitService } from '../../application/services/fruitService';
import { FruitRepositoryImpl } from '../../infrastructure/persistence/repositories/fruitRepositoryImpl';

const schema = makeSchema({
  types: [resolvers],
  outputs: {
    schema: join(__dirname, 'schema.graphql'),
    typegen: join(__dirname, '../generated/nexus-typegen.ts'),
  },
});

export const createApolloServer = (): ApolloServer => {
  const fruitRepository = new FruitRepositoryImpl();
  const fruitService = new FruitService(fruitRepository);

  return new ApolloServer({
    schema,
    context: ({ req }) => {

      return { fruitService };
    },
  });
};
