import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { DataResultUser, IUser, ResultUser, UserSign } from "../interfaces";

enum Method {
  POST = "POST",
  GET = "GET",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/users" }),
  endpoints: (builder) => ({
    signInUser: builder.mutation<UserSign, any>({
      query: (userData) => ({
        url: "/auth",
        method: Method.POST,
        body: userData,
      }),
    }),
    regUser: builder.mutation<UserSign, any>({
      query: (userData) => ({
        url: "/reg",
        method: Method.POST,
        body: userData,
      }),
    }),
    getUser: builder.query<DataResultUser, string | null>({
      query: (token) => ({
        url: "/user",
        method: Method.GET,
        headers: {
          authorization: "Bearer " + token,
        },
      }),
    }),
    getUserByParams: builder.query<any, any>({
      query: (username) => `/${username}`,
    }),
  }),
});

export const { useSignInUserMutation, useRegUserMutation, useGetUserQuery, useGetUserByParamsQuery } = authApi;
