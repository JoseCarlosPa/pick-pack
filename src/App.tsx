import React from 'react';
import './assets/css/main.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<Home />}></Route>
        <Route path='/productos' element={<Products />}></Route>
        <Route path='/contacto' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
