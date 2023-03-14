
export interface Dish {
    dish_id?: number;
    title: string;
    description: string;
    price: number;
    ingredients?: string[];
    image?: string;
}

export interface Shop {    // declare interface for the shops coming in
    shop_id?: number;
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