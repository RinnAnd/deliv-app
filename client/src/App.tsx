import Wrapper from "./components/Wrapper/Wrapper";
import { useFetchShopsQuery } from "./redux/slices/shopSlice";
import { useAppDispatch, useAppSelector } from "./redux/store/hooks";
import Home from "./views/Home";

function App() {
  

  return (
    <div>
      <Wrapper component={Home}/>
    </div>
  );
}

export default App;
