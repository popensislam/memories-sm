import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post, Posts } from "./interfaces";


export const memoriesApi = createApi({
  reducerPath: "memoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/posts" }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<Posts, void>({ query: () => "/" }),
    addPost: builder.mutation<any, Post>({
      query: (post) => ({
        url: "/",
        method: "POST",
        params: { post },
      }),
    }),
  }),
});

export const { useGetAllPostsQuery, useAddPostMutation } = memoriesApi;
