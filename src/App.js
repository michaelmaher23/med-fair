import Index from "./pages/Home/Index.jsx";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Contactus from "./pages/Contactus/Contactus.jsx";
import Footer from "./MYFOOTER/Footer.jsx";
import Navbar from "./pages/Home/Navbar.jsx";
import Aboutus from "./pages/Contactus/Aboutus.jsx";
import SideBox from "./VideoTexts.jsx/SideBox.jsx";
import Watch from "./VideoWatch/Watch.jsx";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBox />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/watch/:videoId" element={<Watch />} />
        </Routes>
        <Footer />
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
