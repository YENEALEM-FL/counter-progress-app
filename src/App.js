import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/custom.scss";
import FunctionalCounter from "./components/FunctionalCounter";

function App() {
  return (
    <div className="App">
      {/* <SimpleCounter /> */}
      <FunctionalCounter />
    </div>
  );
}

export default App;
