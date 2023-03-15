import { useFetchShopsQuery } from "../../redux/slices/shopSlice";
import './Shops.scss'
import Card from "../../components/Card/Card";

const Shops = () => {
  const { data, isLoading } = useFetchShopsQuery();

  return (
    <div className="shops_main_section">
      {data?.map((shop, index) => {
        return (
          <Card
            key={index}
            name={shop.name}
            cuisine={shop.cuisine}
            shop_id={shop.shop_id}
            logo={shop.logo}
          />
        );
      })}
    </div>
  );
};

export default Shops;
