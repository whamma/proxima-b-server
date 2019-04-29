import User from '../../../entities/User';
import { Resolvers } from '../../../types/resolvers';
import { GetUsersResponse } from '../../../types/graph';

const resolvers: Resolvers = {
  Query: {
    GetUsers: async (_, __): Promise<GetUsersResponse> => {
      try {
        const users = await User.find();
        return {
          ok: true,
          error: null,
          users,
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          users: null,
        };
      }
    },
  },
};

export default resolvers;
