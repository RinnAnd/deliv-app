import { useParams } from "react-router-dom";
import { useFetchDishQuery } from "../../redux/slices/shopSlice";
import './Buy.scss';

const Buy = () => {

  const { id } = useParams();

  const { data, isLoading } = useFetchDishQuery(Number(id));

  return <div>{data?.title}</div>;
};

export default Buy;
