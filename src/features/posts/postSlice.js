import api from "../../store/apiSlice";

const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
      transformResponse: (response) => response.data.posts,
      providesTags: ["Posts"],
    }),
  })
})

export const { useGetPostsQuery } = postsApi;