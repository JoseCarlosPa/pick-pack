import React, {useCallback} from 'react';
import '../assets/css/main.css'
import Navbar from "../components/Navbar";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import working from '../assets/imgs/working-woman.png'
import Card from "../components/Card";
import SelectProduct from "../components/SelectProduct";

const Home = () => {

  const [product, setProduct] = React.useState('Producto 1')

  const ShowProduct = useCallback(()=>{
    if(product === 'Producto 1'){
      return <div>Producto 1</div>
    }
    if(product === 'Producto 2'){
      return <div>Producto 2</div>
    }
    if(product === 'Producto 3'){
      return <div>Producto 3</div>
    }
    if(product === 'Producto 4'){
      return <div>Producto 4</div>
    }
    return <></>

  },[product])

  return (
    <div className="flex flex-col">
      <div className="flex flex-row mb-4 bg-white"></div>
      <div className="flex flex-col main-bg">
        <Navbar/>
        <div className="gray-filter">
          <hr className="border-white my-2"/>
          <div className="mt-80 ">
            <div className="flex flex-col text-white text-center">
              <h2 className="typo-nuevas">Nuevas</h2>
              <h1 className="typo-tecnologias -mt-12">TECNOLOGÍAS</h1>
              <p className="typo-parragraph -mt-2">Comenzando nuevos proyectos seguros de que lo que</p>
              <p className="typo-parragraph -mt-3">nosotros tenemos para ti, te va a servir.</p>
            </div>
          </div>
          <div className="w-full flex flex-row justify-center mt-8 mb-40">
            <div
              className="border-2 bg-white rounded-full flex flex-row w-40 justify-center py-3 hover:bg-transparent hover:text-white cursor-pointer">
              <p>Ver productos</p>
              <FontAwesomeIcon icon={solid('caret-right')} className="ml-1 mt-1 cursor-pointer w-4"/>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-80 wave">
        <div className="flex flex-col mb-12">
          <div className="flex flex-row w-full justify-center -mt-72">
            <img src={working} alt="woking-woman" className="h-96"/>
            <div className="flex flex-col ml-24">
              <div className="flex flex-col w-96 text-center h-32 rectangle mt-32 ">
                <div className="flex flex-col -mt-40">
                  <p className="orange-number">15</p>
                  <div className="-mt-16">
                    <p className="text-white font-bold text-2xl">Años de experiencia en creación</p>
                    <p className="text-white font-bold text-2xl">de materiales</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col text-left w-96">
                <p className="mt-6">Nuestra experiencia nos respalda y nuestros clientes nos lo
                  demuestran con la confianza que tienen en nuestros productos realizados 100% en México.</p>
                <p className="mt-4">Nombre de persona</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full justify-center mt-12 ml-20">
            <div className="flex flex-col mr-24">
              <p className="text-gray-500 font-bold">Trabaja con nosotros</p>
              <div className="flex flex-col mt-4">
                <p className="font-bold text-2xl">Expertos en nuevos </p>
                <p className="font-bold text-2xl">proyectos mexicanos</p>
              </div>
              <button className="btn-orange px-5 py-1 w-36 mt-4 shadow-sm hover:bg-orange-400">Cotiza</button>
            </div>
            <div className="flex md:flex-row sm:flex-col">
              <Card title="Proyectos Activos" number={30} className="ml-6"/>
              <Card title="Proyectos Terminados" number={58} className="ml-6"/>
              <Card title="Piezas Creadas" number={97} className="ml-6"/>
            </div>
          </div>
          <div className="mt-8 mx-32">
            <div className="grid grid-cols-12 text-center">
              <div className="col-span-2"></div>
              <div className="col-span-2 ">
                <div className="flex flex-col">
                  <SelectProduct title={"Producto 1"} setProduct={setProduct} />
                  <SelectProduct title={"Producto 2"} setProduct={setProduct} />
                  <SelectProduct title={"Producto 3"} setProduct={setProduct} />
                  <SelectProduct title={"Producto 4"} setProduct={setProduct} />
                </div>
              </div>
              <div>
                <ShowProduct />
              </div>
              <div>3</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default React.memo(Home);