import RouteComponent from "./components/RouteComponent";
import {BrowserRouter} from "react-router-dom";

import "./assets/App.css";

function App() {
  return <BrowserRouter>
  <div>
    <RouteComponent />
  </div>
  </BrowserRouter>
}

export default App;
