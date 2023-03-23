
export interface Dish {
    dish_id?: number;
    title: string;
    description: string;
    price: number;
    ingredients?: string[];
    image?: string;
    shop_id: string;
    quant?:number;
}

export interface Shop {    // declare interface for the shops coming in
    shop_id?: number;
    name: string;
    cuisine: string;
    logo?: string;
    cat_id: number;
    Dishes?: Dish[];
}

export interface cartState {
    products: Dish[],
};