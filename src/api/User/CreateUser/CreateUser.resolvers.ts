import { Resolvers } from '../../../types/resolvers';
import {
  CreateUserResponse,
  CreateUserMutationArgs,
} from '../../../types/graph';
import User from '../../../entities/User';

const resolvers: Resolvers = {
  Mutation: {
    CreateUser: async (
      _,
      args: CreateUserMutationArgs,
    ): Promise<CreateUserResponse> => {
      try {
        const user = await User.create({ ...args.createUserInput }).save();
        console.log(user);
        return {
          ok: true,
          error: null,
          user,
        };
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
