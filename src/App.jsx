import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

import LoginPage from './Components/LoginPage'
import Home from './Components/Home';
import Mobile from './Routes/Mobile';
import Tablet from './Routes/Tablet';
import Laptop from './Routes/Laptop';

function App() {
  return (

    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="Login" element={<LoginPage/>}/>
        <Route path="Mobile" element={<Mobile/>}/>
        <Route path="Tablet" element={<Tablet/>}/>
        <Route path="laptop" element={<Laptop/>}/>



      </Routes>
    </BrowserRouter>
  );
}

export default App;
