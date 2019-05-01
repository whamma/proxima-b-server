export const typeDefs = ["type CreateUserResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ninput CreateUserInput {\n  email: String!\n  name: String!\n  password: String!\n}\n\ntype Mutation {\n  CreateUser(createUserInput: CreateUserInput!): CreateUserResponse!\n}\n\ntype GetUserResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\n# GetUsers Query type\ntype Query {\n  GetUser(id: Int!): GetUserResponse!\n  GetUsers: GetUsersResponse!\n}\n\n# GetUsers 응답 type\ntype GetUsersResponse {\n  ok: Boolean!\n  error: String\n  users: [User]\n}\n\n# user graphql type\nscalar DateTime\n\ntype User {\n  id: Int!\n  email: String\n  name: String\n  password: String\n  createdAt: DateTime\n  updatedAt: DateTime\n}\n"];
/* tslint:disable */

export interface Query {
  GetUser: GetUserResponse;
  GetUsers: GetUsersResponse;
}

export interface GetUserQueryArgs {
  id: number;
}

export interface GetUserResponse {
  ok: boolean;
  error: string | null;
  user: User | null;
}

export interface User {
  id: number;
  email: string | null;
  name: string | null;
  password: string | null;
  createdAt: DateTime | null;
  updatedAt: DateTime | null;
}

export type DateTime = any;

export interface GetUsersResponse {
  ok: boolean;
  error: string | null;
  users: Array<User> | null;
}

export interface Mutation {
  CreateUser: CreateUserResponse;
}

export interface CreateUserMutationArgs {
  createUserInput: CreateUserInput;
}

export interface CreateUserInput {
  email: string;
  name: string;
  password: string;
}

export interface CreateUserResponse {
  ok: boolean;
  error: string | null;
  user: User | null;
}
