import React from 'react';
import '../assets/css/main.css'
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row mb-4 bg-white"></div>
      <div className="flex flex-row main-bg">
        <Navbar/>
      </div>
    </div>
  );
}

export default React.memo(Home);