import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { JobPosting } from '../../type/type';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://akil-backend.onrender.com/opportunities/' }),
  endpoints: (builder) => ({
    getJobPost: builder.query<JobPosting, void>({
      query: () => 'search',
    }),
    getJobPostById: builder.query<JobPosting, string>({
      query: (id) => `${id}`,
    }),
  }),
});

export const { useGetJobPostQuery, useGetJobPostByIdQuery } = apiSlice;
