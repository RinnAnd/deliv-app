import Wrapper from "./components/Wrapper/Wrapper";
import Home from "./views/Home/Home";
import { Routes, Route } from "react-router-dom";
import Shops from "./views/Shops/Shops";
import Shop from "./views/Shop/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Wrapper component={<Home />} />} />
      <Route path='/shops' element={<Wrapper component={<Shops />} />} />
      <Route path='/shop/:id' element={<Wrapper component={<Shop />} />} />
    </Routes>
  );
}

export default App;
