
import Index from './pages/Home/Index.jsx';
import './App.css';
import {BrowserRouter,Route, Routes } from 'react-router-dom';
function App() {
  return (    <BrowserRouter>
    <div className="App">
  
      <Routes>
      <Route path="/" element={<Index />}/>
      </Routes>

        
    
     
    </div>
   </BrowserRouter> );
}

export default App;
