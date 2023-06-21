import { asNexusMethod } from 'nexus';
import { GraphQLDateTime } from 'graphql-scalars';
import { findFruitQuery } from './fruit/fruitQueries';
import { storeFruitMutation,removeFruitMutation,createFruitMutation,updateFruitMutation,deleteFruitMutation } from './fruit/fruitMutations';

export const resolvers = {
  DateTime: asNexusMethod(GraphQLDateTime, 'date'),
  Query: {
    findFruitQuery,
  },
  Mutation: {
    storeFruitMutation,removeFruitMutation,createFruitMutation,updateFruitMutation,deleteFruitMutation
  },
};
