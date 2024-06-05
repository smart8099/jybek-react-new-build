import {jybekApi} from "../jybekApiSlice.js";

export const authApiSlice = jybekApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials
      })
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
