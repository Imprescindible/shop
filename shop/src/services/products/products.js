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
    }),
    getProduct: builder.query({
      query: (id) => ({
        url: `products/${id}`,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsAllQuery, useGetProductQuery } = productsApi;
