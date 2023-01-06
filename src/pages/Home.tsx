import React from 'react';
import '../assets/css/main.css'
import Navbar from "../components/Navbar";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row mb-4 bg-white"></div>
      <div className="flex flex-col main-bg">
        <Navbar/>
        <hr className="border-white my-2"/>
        <div className="mt-80">
          <div className="flex flex-col text-white text-center">
            <h2 className="typo-nuevas">Nuevas</h2>
            <h1 className="typo-tecnologias -mt-12">TECNOLOGÍAS</h1>
            <p className="typo-parragraph -mt-2">Comenzando nuevos proyectos seguros de que lo que</p>
            <p className="typo-parragraph -mt-3">nosotros tenemos para ti, te va a servir.</p>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center mt-8">
          <div
            className="border-2 bg-white rounded-full flex flex-row w-40 px-3 py-3 hover:bg-transparent hover:text-white cursor-pointer">
            <p>Ver productos</p>
            <FontAwesomeIcon icon={solid('caret-right')} className="ml-1 mt-1 cursor-pointer w-4"/>
          </div>
        </div>
      </div>
      <div className="mt-4">

      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#f3f4f5" fill-opacity="1"
              d="M0,128L80,133.3C160,139,320,149,480,144C640,139,800,117,960,122.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
    </div>
  );
}

export default React.memo(Home);