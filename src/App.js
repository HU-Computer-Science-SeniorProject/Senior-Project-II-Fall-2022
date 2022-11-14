import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Premium from "./pages/main";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="content">
          <NavLink className="content" exact activeClassName="active" to="/">
            Home
          </NavLink>
          <NavLink className="content" activeClassName="active" to="/about">
            About
          </NavLink>
          <NavLink className="content" activeClassName="active" to="/main">
            Main
          </NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/main" element={<Premium />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
