import { Resolvers } from 'src/types/resolvers';
import { GetUsersResponse } from 'src/types/graph';

const resolvers: Resolvers = {
  Query: {
    GetUsers: (_, __): GetUsersResponse => {
      const users = [
        {
          id: 1,
          email: 'whamma@gmail.com',
          name: 'whamma',
        },
        {
          id: 2,
          email: 'hkkim@gemiso.com',
          name: 'hkkim',
        },
      ];
      return {
        ok: true,
        error: null,
        users,
      };
    },
  },
};

export default resolvers;
