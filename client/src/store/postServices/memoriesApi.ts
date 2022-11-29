import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AllByAttribute } from "@testing-library/react";
import { Post, Posts } from "../interfaces";

enum Method {
  POST = "POST",
  GET = "GET",
  PATCH = "PATCH",
  DELETE = "DELETE",
  PUT = "PUT",
}

export const memoriesApi = createApi({
  reducerPath: "memoriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/posts",
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("access");
      const refreshToken = localStorage.getItem("refreshAccess");
      if (token) {
        headers.set("authorization", `Bearer ${token} ${refreshToken}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<Posts[] | undefined, string>({
      query: (sort) => `?sortBy=${sort}`,
    }),
    addPost: builder.mutation<Post, Post>({
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
    getUserPosts: builder.query<any, string | null | undefined>({
      query: (username) => `/${username}`,
    }),

    // COMMENTS -----------------------------------
    getPostComments: builder.mutation<any, any>({
      query: (post) => ({
        url: "/comments",
        body: post,
        method: Method.PUT,
      }),
    }),
    getPostCommentsFirstTime: builder.mutation<any, any>({
      query: (postId) => `/comments/${postId}`,
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetUserPostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  useLikePostMutation,
  useGetPostCommentsMutation,
  useGetPostCommentsFirstTimeMutation,
} = memoriesApi;
