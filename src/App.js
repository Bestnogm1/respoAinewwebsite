import logo from "./logo.svg";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage/HomePageComponet/HomePage";
import NavBar from "./NavBar/NavBar";
import PricePage from "./PricePage/PricePage";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="AppContainer">
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="price" element={<PricePage />} /> */}
        </Routes>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
