import { FC } from "react";
import "./Card.scss";
import { useNavigate } from 'react-router-dom'

interface Props {
  shop_id?: number;
  name: string;
  cuisine: string;
  logo?: string;
}

const Card: FC<Props> = (Shop) => {
  const { shop_id, name, cuisine, logo } = Shop;

  const navigate = useNavigate()

  const imageStyle = {
    backgroundImage: `url(${logo})`,
    backgroundPosition: "center",
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundColor: 'white',
    height: "10rem",
    width: "10rem",
  };

  return (
    <div className="card_box" key={shop_id}>
      <div className="image_side">
        <div style={imageStyle}>
          <h4 className="shop_cuisine">{cuisine}</h4>
        </div>
      </div>
      <div className="info_side">
        <h1 className="shop_name">{name}</h1>
        <button className="button" onClick={() => navigate(`/shop/${shop_id}`)}>Buy now</button>
      </div>
    </div>
  );
};

export default Card;
