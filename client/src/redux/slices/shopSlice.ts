import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Shop, Dish } from "../types";

export const shopSlice = createApi({
  reducerPath: "database",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:2005/",
  }),
  endpoints(builder) {
    return {
      fetchShops: builder.query<Shop[], number | void>({
        query: () => "shop",
      }),
      fetchShop: builder.query<Shop, number | void>({
        query: (id) => `shop/${id}`,
      }),
      fetchDishes: builder.query<Dish[], number | void>({
        query: () => "dish",
      }),
      fetchDish: builder.query<Dish, number | void>({
        query: (id) => `dish/${id}`,
      }),
      createShop: builder.mutation<any, Shop>({
        query: (newShop: Shop) => ({
          url: "shop",
          method: "POST",
          body: newShop,
        }),
      }),
      createDish: builder.mutation<any, Dish>({
        query: (newDish: Dish) => ({
          url: "dish",
          method: "POST",
          body: newDish,
        }),
      }),
    };
  },
});

export const {
  useFetchShopsQuery,
  useFetchShopQuery,
  useFetchDishesQuery,
  useFetchDishQuery,
  useCreateShopMutation,
  useCreateDishMutation,
} = shopSlice;
