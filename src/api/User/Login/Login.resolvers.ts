import { LoginMutationArgs, LoginResponse } from './../../../types/graph.d';
import { Resolvers } from '../../../types/resolvers';
import User from '../../../entities/User';
import { createJWT } from '../../../utils/JWTHelper';

const LOGIN_ERROR_MESSAGE = 'email or password invalid.';

const resolvers: Resolvers = {
  Mutation: {
    Login: async (_, args: LoginMutationArgs): Promise<LoginResponse> => {
      const { email, password } = args;
      try {
        const user = await User.createQueryBuilder('user')
          .where('user.email=:email', {
            email,
          })
          .addSelect('user.password')
          .getOne();
        if (!user) {
          return {
            ok: false,
            error: LOGIN_ERROR_MESSAGE,
            token: null,
          };
        }
        const checkPassword = await user.comparePassword(password);
        if (checkPassword) {
          const token = createJWT(user.id);
          return {
            ok: true,
            error: null,
            token,
          };
        } else {
          return {
            ok: false,
            error: LOGIN_ERROR_MESSAGE,
            token: null,
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null,
        };
      }
    },
  },
};

export default resolvers;
