import Wrapper from "./components/Wrapper/Wrapper";
import Home from "./views/Home/Home";

function App() {  

  return (
    <div>
      <Wrapper component={<Home/>}/>
    </div>
  );
}

export default App;
