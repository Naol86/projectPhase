import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { JobPostById, JobPosting } from '../../type/type';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://akil-backend.onrender.com/opportunities/' }),
  endpoints: (builder) => ({
    getJobPost: builder.query<JobPosting, void>({
      query: () => 'search',
    }),
    getJobPostById: builder.query<JobPostById, string>({
      query: (id) => `${id}`,
    }),
  }),
});

export const { useGetJobPostQuery, useGetJobPostByIdQuery } = apiSlice;
