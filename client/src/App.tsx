import { useFetchShopsQuery } from "./redux/slices/shopSlice";
import { useAppDispatch, useAppSelector } from "./redux/store/hooks";

function App() {
  
  const dispatch = useAppDispatch()

  const { data = [], isFetching } = useFetchShopsQuery();

  return (
    <div>
      <div>
        <p>
        number of shops: {data.length}
        </p>
        <div>
          {data.map(shop => {
            return (
              <div key={shop.shop_id}>
                <h1>{shop.name}</h1>
                <h2>{shop.cuisine}</h2>
                <img src={shop.logo} alt="noimg" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
