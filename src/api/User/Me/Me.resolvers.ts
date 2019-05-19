import { Resolvers } from '../../../types/resolvers';
import User from '../../../entities/User';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
  Query: {
    Me: privateResolver(
      async (_, __, { req }): Promise<User> => {
        return req.user;
      },
    ),
  },
};

export default resolvers;
