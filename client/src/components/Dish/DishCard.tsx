import { Dish } from "../../redux/types";
import accounting from 'accounting'
import "./Dish.scss";
import { useNavigate } from "react-router-dom";

const DishCard = (dish: Dish) => {
  const { title, description, price, image, ingredients, dish_id } = dish;

  const navigate = useNavigate()

  console.log(dish)

  return (
    <div className="dish_box" onClick={() => navigate(`/dish/${dish_id}`)}>
      <img src={image} alt="no img" className="dish_pic" />
      <div className="dish_text">
        <h2 className="dish_title">{title}</h2>
        <p className="dish_desc">{description}</p>
      </div>
      <p className="dish_price">{accounting.formatMoney(price)}</p>
    </div>
  );
};

export default DishCard;
