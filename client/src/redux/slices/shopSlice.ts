import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Dish {
  dish_id: number;
  title: string;
  description: string;
  price: number;
  ingredients?: string[];
  image?: string;
}
interface Shop {
  // declare interface for the type of the initial state
  shop_id: number;
  name: string;
  cuisine: string;
  logo?: string;
  Dishes?: {
    dish_id: number;
    title: string;
    description: string;
    price: number;
    ingredients?: string[];
    image?: string;
  };
}

export const shopSlice = createApi({
  reducerPath: "databse",
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
        query: () => "dish"
      }),
      fetchDish: builder.query<Dish, number | void>({
        query: (id) => `dish/${id}`
      })
    };
  },
});

export const { useFetchShopsQuery, useFetchShopQuery, useFetchDishesQuery, useFetchDishQuery } = shopSlice;
