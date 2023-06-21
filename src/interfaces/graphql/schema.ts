const { gql } = require("apollo-server");

export const typeDefs = gql `
input FruitLimit {
    name: String!
    description: String!
    limit: Int!
    amount: Int!
    forceDelete: Boolean!
  }
`

