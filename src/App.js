import "./App.css";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import OfferBar from "./Components/OfferBar/OfferBar";
import Home from "./Home/Home";

function App() {
  return (
    <div>
      <Router>
        <OfferBar />
        <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
