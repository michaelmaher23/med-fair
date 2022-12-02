import Index from "./pages/Home/Index.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Contactus from "./pages/Contactus/Contactus.jsx";
import Footer from "./MYFOOTER/Footer.jsx";
import Navbar from "./VideoWatch/Sidebar2.jsx";
import Aboutus from "./pages/Contactus/Aboutus.jsx";
import SideBox from "./VideoTexts.jsx/SideBox.jsx";
import Watch from "./VideoWatch/Watch.jsx";
import "./App.css";
 
import { useEffect } from "react";
function App() {




  return (
    < >
      <BrowserRouter >
      <div className="App">
<Navbar/>
    
        <SideBox  />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/about" element={<Aboutus />} />
          <Route      path="/watch/:PlayListId/:videoId" element={<Watch />} />
          <Route path="/watch/:PlayListId" element={<Watch />} />
        </Routes>
        <Footer /> 
         </div>
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
