export const typeDefs = ["scalar Date\n\nscalar Time\n\nscalar DateTime\n\ntype CreateUserResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ninput CreateUserInput {\n  email: String!\n  name: String!\n  password: String!\n}\n\ntype Mutation {\n  CreateUser(createUserInput: CreateUserInput!): CreateUserResponse!\n  Login(email: String!, password: String!): LoginResponse!\n}\n\ntype GetUserResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype Query {\n  GetUser(id: Int!): GetUserResponse!\n  GetUsers: GetUsersResponse!\n  Me: User\n}\n\n# GetUsers 응답 type\ntype GetUsersResponse {\n  ok: Boolean!\n  error: String\n  users: [User]\n}\n\ntype LoginResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\n# user graphql type\ntype User {\n  id: Int!\n  email: String\n  name: String\n  password: String\n  createdAt: DateTime\n  updatedAt: DateTime\n}\n"];
/* tslint:disable */

export interface Query {
  GetUser: GetUserResponse;
  GetUsers: GetUsersResponse;
  Me: User | null;
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
  Login: LoginResponse;
}

export interface CreateUserMutationArgs {
  createUserInput: CreateUserInput;
}

export interface LoginMutationArgs {
  email: string;
  password: string;
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

export interface LoginResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export type Date = any;

export type Time = any;
