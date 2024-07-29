import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
  reducerPath: 'carsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://66a511d65dc27a3c190a9139.mockapi.io/api/cars' }),
  endpoints: (builder) => ({
    getCars: builder.query({
      query: () => '/cars',
    }),
    getCar: builder.query({
      query: (id) => `/cars/${id}`,
    }),
    addCar: builder.mutation({
      query: (newCar) => ({
        url: '/cars',
        method: 'POST',
        body: newCar,
      }),
    }),
    updateCar: builder.mutation({
      query: ({ id, ...updatedCar }) => ({
        url: `/cars/${id}`,
        method: 'PUT',
        body: updatedCar,
      }),
    }),
    deleteCar: builder.mutation({
      query: (id) => ({
        url: `/cars/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetCarsQuery,
  useGetCarQuery,
  useAddCarMutation,
  useUpdateCarMutation,
  useDeleteCarMutation,
} = carsApi;
