export const typeDefs = ["type CreateUserResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype Mutation {\n  CreateUser(email: String, name: String!): CreateUserResponse!\n}\n\n# GetUsers 응답 type\ntype GetUsersResponse {\n  ok: Boolean!\n  error: String\n  users: [User]\n}\n\n# GetUsers Query type\ntype Query {\n  GetUsers: GetUsersResponse!\n}\n\n# user graphql type\ntype User {\n  id: Int!\n  email: String\n  name: String\n}\n"];
/* tslint:disable */

export interface Query {
  GetUsers: GetUsersResponse;
}

export interface GetUsersResponse {
  ok: boolean;
  error: string | null;
  users: Array<User> | null;
}

export interface User {
  id: number;
  email: string | null;
  name: string | null;
}

export interface Mutation {
  CreateUser: CreateUserResponse;
}

export interface CreateUserMutationArgs {
  email: string | null;
  name: string;
}

export interface CreateUserResponse {
  ok: boolean;
  error: string | null;
  user: User | null;
}
