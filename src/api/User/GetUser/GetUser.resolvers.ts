import { Resolvers } from '../../../types/resolvers';
import { GetUserQueryArgs, GetUserResponse } from '../../../types/graph';
import User from '../../../entities/User';

const resolvers: Resolvers = {
  Query: {
    GetUser: async (_, args: GetUserQueryArgs): Promise<GetUserResponse> => {
      const { id } = args;
      try {
        const user = await User.findOne({ id });
        if (user) {
          return {
            ok: true,
            error: null,
            user: user,
          };
        } else {
          return {
            ok: false,
            error: 'user not found',
            user: null,
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          user: null,
        };
      }
    },
  },
};

export default resolvers;
