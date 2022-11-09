import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AllByAttribute } from "@testing-library/react";
import { Post, Posts } from "./interfaces";

enum Method {
  POST = "POST",
  GET = "GET",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export const memoriesApi = createApi({
  reducerPath: "memoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/posts" }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<Posts[] | undefined, void>({
      query: () => "/",
    }),
    addPost: builder.mutation<Posts, Post>({
      query: (post) => ({
        url: "/",
        method: Method.POST,
        body: post,
      }),
    }),
    updatePost: builder.mutation<Posts, Posts>({
      query: (post) => ({
        url: `/${post._id}`,
        method: Method.PATCH,
        body: post,
      }),
    }),
    deletePost: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/${id}`,
        method: Method.DELETE,
      }),
    }),
    likePost: builder.mutation<Posts, string>({
      query: (id) => ({
        url: `/${id}/likePost`,
        method: Method.PATCH,
      }),
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  useLikePostMutation,
} = memoriesApi;
