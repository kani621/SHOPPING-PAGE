import React from 'react';
import Home from './pages/Home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin.jsx';
import Signup from './pages/Signup.jsx';
import Product from './pages/Product.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path = "/Signin" element = {<Signin/>}/>
          <Route path = "/signup" element = {<Signup/>}/>
          <Route path ="/product" element ={<Product/>}/>
          <Route path = "/contact" element ={<Contact/>}/>
          
         
          </Routes>
      </BrowserRouter>
     
    
    </div>
  );
}

export default App;
