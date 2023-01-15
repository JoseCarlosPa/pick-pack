import React, {useCallback} from 'react';
import '../assets/css/main.css'
import Navbar from "../components/Navbar";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import working from '../assets/imgs/working-woman.png'
import working2 from '../assets/imgs/working-woman2.png'
import product1 from '../assets/imgs/producto1.png'
import product2 from '../assets/imgs/producto2.png'
import icon1 from '../assets/imgs/icon-check.png'
import icon2 from '../assets/imgs/icon-idea.png'
import icon3 from '../assets/imgs/icon-machine.png'

import Card from "../components/Card";
import SelectProduct from "../components/SelectProduct";
import IconCard from "../components/IconCard";
import Footer from "../components/Footer";

const Home = () => {

  const [product, setProduct] = React.useState('Producto 1')

  const ShowProduct = useCallback(() => {
    if (product === 'Producto 1') {
      return (
        <div className="flex flex-col">
          <p className="font-bold text-2xl">Nuestros materiales son de
            la mayor calidad del
            mercado mexicano.</p>
          <p className="mt-2">Nuestros diferenciadores son la mano de obra dedicada exclusivamente a tu proyecto para
            que tus productos
            sean realizados bajo la mejor supervisión y atención que merecen. </p>
        </div>
      );
    }
    if (product === 'Producto 2') {
      return <div>Producto 2</div>
    }
    if (product === 'Producto 3') {
      return <div>Producto 3</div>
    }
    if (product === 'Producto 4') {
      return <div>Producto 4</div>
    }
    return <></>

  }, [product])

  return (
    <div className="flex flex-col">
      <div className="flex flex-row mb-4 bg-white"></div>
      <div className="flex flex-col main-bg">
        <div className="hidden md:block">
          <Navbar/>
        </div>
        <div className="gray-filter">
          <hr className="border-white my-2"/>
          <div className="mt-80 ">
            <div className="flex flex-col text-white text-center">
              <h2 className="text-5xl">Nuevas</h2>
              <h1 className="text-5xl md:text-8xl mt-4">TECNOLOGÍAS</h1>
              <p className="typo-parragraph -md:mt-2">Comenzando nuevos proyectos seguros de que lo que</p>
              <p className="typo-parragraph -md:mt-3">nosotros tenemos para ti, te va a servir.</p>
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
      <div className="mt-32 md:mt-80 wave">
        <div className="flex flex-col mb-12">
          <div className="flex flex-row w-full justify-center md:-mt-72">
            <img src={working} alt="woking-woman" className="h-96 hidden md:block"/>
            <div className="flex flex-col md:ml-24">
              <div className="flex flex-col w-96 text-center h-32 rectangle md:mt-32 ">
                <div className="flex flex-col md:-mt-16">
                  <p className="text-orange-400 text-9xl -mt-28  md:mt-0  font-bold">15</p>
                  <div className="md:-mt-2">
                    <p className="text-white font-bold text-2xl">Años de experiencia en creación</p>
                    <p className="text-white font-bold text-2xl">de materiales</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col text-left w-96">
                <p className="mt-6 text-center md:text-left text-xl ">Nuestra experiencia nos respalda y nuestros
                  clientes nos lo
                  demuestran con la confianza que tienen en nuestros productos realizados 100% en México.</p>
                <p className="md:mt-4 hidden md:block">Nombre de persona</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full justify-center mt-12 md:ml-20 text-center md:text-left">
            <div className="flex flex-col md:mr-24">
              <p className="text-gray-500 font-bold text-2xl">Trabaja con nosotros</p>
              <div className="flex flex-col mt-4">
                <p className="font-bold text-2xl">Expertos en nuevos </p>
                <p className="font-bold text-2xl">proyectos mexicanos</p>
              </div>
              <div className="flex flex-row w-full justify-center md:justify-start">
                <button
                  className="btn-orange px-5 py-1 w-36 mt-4 shadow-sm hover:bg-orange-400 text-2xl mb-12 md:mb-0 ">Cotiza
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center md:justify-start ">
              <div className="flex flex-row w-full justify-center">
                <Card title="Proyectos Activos" number={30} className="mt-6 md:mt-0 md:ml-6"/>
              </div>
              <div className="flex flex-row w-full justify-center">
                <Card title="Proyectos Terminados" number={58} className="mt-6 md:mt-0 md:ml-6"/>
              </div>
              <div className="flex flex-row w-full justify-center">
                <Card title="Piezas Creadas" number={97} className="mt-6 md:mt-0 md:ml-6"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8  md:mx-32 ">
        <div className="grid grid-cols-12 text-center">
          <div className="hidden md:block md:col-span-2"></div>
          <div className="hidden md:block md:col-span-2 ">
            <div className="flex flex-col hidden md:block">
              <SelectProduct title={"Producto 1"} setProduct={setProduct}/>
              <SelectProduct title={"Producto 2"} setProduct={setProduct}/>
              <SelectProduct title={"Producto 3"} setProduct={setProduct}/>
              <SelectProduct title={"Producto 4"} setProduct={setProduct}/>
            </div>
          </div>
          <div className="md:ml-8 col-span-12 md:col-span-5 text-left">
            <div className="md:hidden block">
              <img src={working2} alt="working"/>
            </div>
            <div className="mx-4 md:mx-0 mt-4 md:mt-0">
              <ShowProduct/>
            </div>
          </div>
          <div className="hidden md:block">
            <img src={working2} alt="working"/>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-28 text-center">
        <p className="font-bold text-xl text-orange-400">PRODUCCIÓN</p>
        <p className="font-bold text-4xl text-gray-800 mt-4">Últimos Trabajos</p>
        <p className="text-gray-500 mt-4">Nos encanta presumir las nuevas piezas y creaciones que realizamos
          personalizadas</p>
        <p className="text-gray-500"> para los productos de
          nuestros clientes.</p>
      </div>
      <div className="fle flex-col mt-60 rectangle-cover">
        <div className="flex flex-row justify-center space-x-8 -mt-32 mb-16">
          <div className="flex flex-col text-center ">
            <img src={product1} alt="product1" className="h-72 shadow"/>
            <p className="text-white mt-4">Producto 1</p>
            <p className="text-white mt-4">EMPRESA FECHA</p>
          </div>
          <div className="flex flex-col text-center hidden md:block">
            <img src={product2} alt="product1" className="h-72 shadow"/>
            <p className="text-white mt-4">Producto 2</p>
            <p className="text-white mt-4">EMPRESA FECHA</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-28 text-center">
        <p className="font-bold text-xl text-orange-400">COMO TRABAJAMOS</p>
        <p className="font-bold text-4xl text-gray-800 mt-4">Nuestro Proceso</p>
        <p className="text-gray-500 mt-4">Para nosotros es importante siempre estar en contacto con el cliente y tener
          una </p>
        <p className="text-gray-500"> comunicación constante y efectiva para garantizar los mejores resultados.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center mt-28 text-center space-y-12 md:space-y-0 md:space-x-12 mb-16">
        <div className="flex flex-row justify-center">
          <IconCard icon={icon1} title="Diseño" number="01"
                    description="Todo nuestro trabajo pasa por
                  el proceso de diseño de la mano
                  del cliente para saber que los
                  resultados sean justo lo que
                  se necesita."/>
        </div>
        <div className="flex flex-row justify-center">
          <IconCard icon={icon2} title="Planeación" number="02"
                    description="La planificación y tiempos de
                  entrega quedan acordados desde
                  el inicio del proyecto, además
                  estamos en comunicación
                  constante con el cliente."/>
        </div>
        <div className="flex flex-row justify-center">
          <IconCard icon={icon3} title="Producción" number="03"
                    description="En la etapa de desarrollo nuestro
                  equipo se enfoca en que no
                  exista ni un error en ninguno
                  de los productos solicitados."/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default React.memo(Home);