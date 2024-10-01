import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

import LoginPage from './Components/LoginPage'
import Home from './Components/Home';

function App() {
  return (

    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="Login" element={<LoginPage/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
