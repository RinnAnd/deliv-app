import { useFetchShopQuery } from "../../redux/slices/shopSlice";
import { useParams } from "react-router-dom";
import "./Shop.scss";
import noimg from "../../assets/noimage.png";
import borgirs from "../../assets/Dashboard.jpg";
import chickin from "../../assets/Chicken.jpg";
import DishCard from "../../components/Dish/DishCard";
import { useState } from "react";

const Shop = () => {
  const { id } = useParams();

  const { data, isLoading } = useFetchShopQuery(Number(id));

  const [banner, setBanner] = useState()

  return (
    <div className="shop_main">
      <div className="dashboard">
        <div className="image_box">
          <img
            src={data?.cuisine == "Burgers" ? borgirs : chickin}
            alt="no-dashboard"
            className="dash_img"
          />
        </div>
        <img
          src={data?.logo ? data.logo : noimg}
          alt="no logo"
          className="dash_logo"
        />
        <h2 className="dash_name">{data?.name}</h2>
      </div>
      <div className="contents">
        <h2 className="contents_intro">
          Hi, Andrés. What will you order today?
        </h2>
        {data?.Dishes?.map((dish: any, index: any) => (
          <DishCard
            key={index}
            title={dish.title}
            description={dish.description}
            price={dish.price}
            image={dish.image}
            shop_id={dish.shop_id}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
