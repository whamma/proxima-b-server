import { GraphQLDate, GraphQLTime, GraphQLDateTime } from 'graphql-iso-date';

const resolvers = {
  Date: GraphQLDate,
  Time: GraphQLTime,
  DateTime: GraphQLDateTime,
};

export default resolvers;
