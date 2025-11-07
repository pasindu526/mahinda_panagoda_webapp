import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import PublicFigure from "./pages/PublicFigure";
import Parlours from "./pages/Parlours";
import Packages from "./pages/Packages";
import Home from "./pages/Home";
import Guidlines from "./pages/Guidlines";
import PreArrangements from "./pages/PreArrangements";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/parlours" element={<Parlours />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/pre-arrangement-packages" element={<PreArrangements />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/publicfigure" element={<PublicFigure />} />
        <Route path="/guideline" element={<Guidlines />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
