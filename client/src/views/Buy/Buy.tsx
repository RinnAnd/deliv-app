import { useParams } from "react-router-dom";
import { addProduct } from "../../redux/slices/cartSlice";
import { useFetchDishQuery } from "../../redux/slices/shopSlice";
import { useAppDispatch } from "../../redux/store/hooks";
import { useAppSelector } from "../../redux/store/store";
import "./Buy.scss";

const Buy = () => {
  const { id } = useParams();

  const { data, isLoading } = useFetchDishQuery(Number(id));

  const cart = useAppSelector((state) => state.cart?.products);

  const dispatch = useAppDispatch();

  return (
    <>
      {isLoading ? (
        <span className="loader"></span>
      ) : (
        <div className="data_box">
          <div className="data_information">
            <img src={data?.image} alt="noimg" className="data_image" />
            <div className="all_text">
              <h2 className="data_title">{data?.title}</h2>
              <h4 className="data_description">{data?.description}</h4>
              <h3 className="data_price">{data?.price}</h3>
              <div className="button_div">
                <button
                  className="add_button"
                  onClick={() => dispatch(addProduct(data!))}
                >
                  Add to the cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Buy;
