import { Resolvers } from '../../../types/resolvers';
import User from '../../../entities/User';

const resolvers: Resolvers = {
  Query: {
    Me: (_, __, { req }): User => {
      return req.user;
    },
  },
};

export default resolvers;
