import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AllByAttribute } from "@testing-library/react";
import { Post, Posts } from "./interfaces";

export const memoriesApi = createApi({
  reducerPath: "memoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/posts" }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<Posts[] | undefined, void>({
      query: () => "/",
    }),
    addPost: builder.mutation<any, Post>({
      query: (post) => ({
        url: "/",
        method: "POST",
        body: post,
      }),
    }),
    updatePost: builder.mutation<any, any>({
      query: (post) => ({
        url: `/${post._id}`,
        method: "PATCH",
        body: post,
      }),
    }),
    deletePost: builder.mutation<{message: string}, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      })
    }),
    likePost: builder.mutation<void, string>({
      query: (id) => ({
        url: `/${id}/likePost`,
        method: 'PATCH',
      })
    })
  }),
});

export const { 
  useGetAllPostsQuery, 
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  useLikePostMutation,
} = memoriesApi;
