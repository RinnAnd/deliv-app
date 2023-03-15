import { FC } from "react";
import { Dish } from "../../redux/types";

const DishCard: FC<Dish> = (dish) => {
  
  const { title, description, price, image, ingredients } = dish

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <img src={image} alt="no img" width={120}/>
    </div>
  );
};

export default DishCard;
