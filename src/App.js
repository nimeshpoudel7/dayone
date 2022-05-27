import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Component/Nav";
// import Todos from "./Components/Home/Todos";
// import About from "./Components/About";
// import Todo from "./Components/Todo/Todo";

function App() {
  return (
    <div>
      <Router>
        <Nav />
      </Router>
    </div>
  );
}

export default App;
