import React from 'react';
import './assets/css/main.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIJpbaDT9Ms3_44zQ78Qd6f14eZVzDBxA",
  authDomain: "pipack-6c700.firebaseapp.com",
  projectId: "pipack-6c700",
  storageBucket: "pipack-6c700.appspot.com",
  messagingSenderId: "214385879764",
  appId: "1:214385879764:web:36c38ab2e8787ce7a86941"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/productos' element={<Products/>}></Route>
          <Route path='/contacto' element={<Contact/>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
