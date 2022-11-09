import Index from "./pages/Home/Index.jsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contactus from "./pages/Contactus/Contactus.jsx";
import Footer from "./MYFOOTER/Footer.jsx";
import Navbar from "./pages/Home/Navbar.jsx";
import Aboutus from "./pages/Contactus/Aboutus.jsx";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
<Navbar/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contactus/>}/>
          <Route path="/about" element={<Aboutus/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
