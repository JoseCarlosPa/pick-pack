import React, {useCallback} from 'react';
import '../assets/css/navbar.css'
import logoCorp from '../assets/logo/logo-corp.png';
import logoTitle from '../assets/logo/logo-title.png';
import NavbarItem from "./NavbarItem";
import DropDown from "./DropDown";

const Navbar = () => {

  return (
    <div className="flex flex-row">
      <div className="flex flex-row mx-52 mt-0 pt-0">
        <div className="flex flex-row -mt-1">
          <img src={logoTitle} alt="logo" className="w-full h-16"/>
          <img src={logoCorp} alt="logo" className="w-full pt-6"/>
        </div>
      </div>
      <div className="flex flex-row w-full  text-xl font-bold mt-4">
        <NavbarItem title="Inicio"/>
        <DropDown title="Productos" >
          <p className="hover:bg-gray-300 cursor-pointer">DUNNAGE</p>
          <p className="hover:bg-gray-300 cursor-pointer">CAJAS</p>
        </DropDown>
        <DropDown title="Servicios">
          <p className="hover:bg-gray-300 cursor-pointer">DISEÑO</p>
          <p className="hover:bg-gray-300 cursor-pointer">PROTOTIPOS</p>
          <p className="hover:bg-gray-300 cursor-pointer">PRODUCCIÓN</p>
          <p className="hover:bg-gray-300 cursor-pointer">PRUEBAS</p>
          <p className="hover:bg-gray-300 cursor-pointer">RETORNABLES</p>
          <p className="hover:bg-gray-300 cursor-pointer">PROTECCIÓN</p>
        </DropDown>
        <DropDown title="Materiales">
          <p className="hover:bg-gray-300 cursor-pointer">EPE</p>
          <p className="hover:bg-gray-300 cursor-pointer">EPP</p>
          <p className="hover:bg-gray-300 cursor-pointer">CROSS LINKED</p>
          <p className="hover:bg-gray-300 cursor-pointer">POLIRREA</p>
          <p className="hover:bg-gray-300 cursor-pointer">POLIURETANO</p>
          <p className="hover:bg-gray-300 cursor-pointer">CARTÓN CORRUGADO</p>
          <p className="hover:bg-gray-300 cursor-pointer">CARTÓN PLÁSTICO</p>
        </DropDown>
        <DropDown title="Procesos" >
          <p className="hover:bg-gray-300 cursor-pointer">CNC</p>
          <p className="hover:bg-gray-300 cursor-pointer">SUAJADO</p>
          <p className="hover:bg-gray-300 cursor-pointer">HOTMELT</p>
          <p className="hover:bg-gray-300 cursor-pointer">INYECCIÓN POLIURETANO</p>
          <p className="hover:bg-gray-300 cursor-pointer">LAMINADO</p>
          <p className="hover:bg-gray-300 cursor-pointer">HOJEADO</p>
        </DropDown>
        <NavbarItem title="Contacto"/>
        <div className="">
          <NavbarItem title="COTIZA CON NOSOTROS" className="ml-24 p-4 rounded-full border-2 border-white -mt-4 text-sm hover:bg-white hover:text-black cursor-pointer "/>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Navbar);