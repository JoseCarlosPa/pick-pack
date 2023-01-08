import React from "react";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logoTitle from '../assets/logo/logo-title.png';

const Footer = () => {
  return (
    <div className="flex flex-col footer text-white">
      <div className="grid grid-cols-12 text-center mt-6 mb-6">
        <div className="col-span-5 border-r border-white">
          <img src={logoTitle} alt="logo" className="w-12 mx-auto"/>
        </div>
        <div className="col-span-2 border-r border-white">+52-442-56-5426</div>
        <div className="col-span-5 text-center">
          <p>
            <FontAwesomeIcon icon={solid('phone-volume')} className="mr-2 mt-1 w-4 orange"/> +52-442-56-5426

          </p>
        </div>
      </div>
      <hr className="border-white"/>
      <p className="text-center mt-6 mb-6">Copyright o algun slogan</p>
    </div>
  );
}

export default React.memo(Footer);