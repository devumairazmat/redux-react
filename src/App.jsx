import "./App.css";
import HomeContainer from "./container/HomeContainer";
import NavbarContainer from "./container/NavbarContainer";
function App() {
  return (
    <div className="App">
      <h2>Redux Practice - Cart</h2>
      <NavbarContainer />
      <HomeContainer />
    </div>
  );
}

export default App;
