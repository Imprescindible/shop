import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/',
  }),

  tagTypes: ['getProductsAll', 'getProduct'],
  endpoints: (builder) => ({
    getProductsAll: builder.query({
      query: () => ({
        url: `products/`,
      }),
      transformResponse: (response) =>
        response.map((item) => ({ ...item, quantity: 20 })),
    }),
    getProduct: builder.query({
      query: (id) => ({
        url: `products/${id}`,
      }),
      transformResponse: (response) => ({ ...response, quantity: 20 }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: `auth/login`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsAllQuery, useGetProductQuery, useLoginMutation } =
  productsApi;
