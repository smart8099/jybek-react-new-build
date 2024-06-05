import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const baseUrl = process.env.REACT_APP_JYBEK_API_BASE_URL;
const reducerPath = 'jybekApi';

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 403) {
    // Assuming refresh token logic is handled here
    const refreshResult = await baseQuery(
      {
        url: '/auth/refresh-token',
        method: 'POST',
        body: { token: localStorage.getItem('refreshToken') },
      },
      api,
      extraOptions
    );

    if (refreshResult.data) {
      // const newAccessToken = refreshResult.data.accessToken;
      // localStorage.setItem('accessToken', newAccessToken);
      // Retry the original request with new token
      result = await baseQuery(args, api, extraOptions);
    } else {
      // Handle refresh token failure, e.g., log out the user
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      api.dispatch({ type: 'auth/logout' });
    }
  }

  return result;
};

export const jybekApi = createApi({
  reducerPath: reducerPath,
  baseQuery: baseQueryWithAuth,
  endpoints: () => ({}),
})