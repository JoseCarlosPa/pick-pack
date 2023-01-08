import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import plane from "../assets/imgs/airplane.png";
const Contact = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col footer">
        <Navbar className="mt-8"/>
        <hr className="border-white my-2"/>
      </div>
      <div className="flex flex-row-reverse mt-8">
        <img src={plane} alt="plane" className="w-1/2 "/>
      </div>
      <form className="contact-margin mb-32">
        <div className="shadow-lg grid grid-cols-12 text-center mx-60 " >
          <div className="col-span-4 bg-card-blue text-white ">
            <div className="flex flex-col py-4 px-12 mt-4">
              <p className="text-xl font-bold">Ubicación</p>
              <div className="flex flex-row mt-4">
                <FontAwesomeIcon icon={solid('map-location')} className="orange"/>
                <p className="text-gray-500">Av. Bien Lejísimos Querétaro, México 76047</p>
              </div>
              <hr className="w-full border-white my-4"/>
              <p className="text-xl font-bold">Llámanos</p>
              <div className="flex flex-row mt-4">
                <FontAwesomeIcon icon={solid('phone-volume')} className="orange mr-4"/>
                <p className="text-gray-500">Av. Bien Lejísimos Querétaro, México 76047</p>
              </div>
              <hr className="w-full border-white my-4"/>
              <p className="text-xl font-bold">Escríbenos</p>
              <div className="flex flex-row mt-4">
                <FontAwesomeIcon icon={solid('envelope')} className="orange mr-4 "/>
                <p className="text-gray-500">Av. Bien Lejísimos Querétaro, México 76047</p>
              </div>
              <hr className="w-full border-white my-4"/>
            </div>
          </div>
          <div className="col-span-8 text-left bg-white">
            <div className="flex flex-col  my-8 mx-16">
              <p className="text-3xl font-bold">Hablemos de tus proyectos</p>
              <input type="text" className="border-b mt-8 " placeholder="Nombre"/>
              <div className="grid grid-cols-2 mt-8 space-x-8">
                <input type="text" className="border-b " placeholder="Correo electrónico"/>
                <input type="text" className="border-b " placeholder="Teléfono"/>
              </div>
              <input type="text" className="border-b mt-8 " placeholder="Cuéntanos de tu Proyecto"/>
              <button type="submit" className="bg-button-orange py-4 px-3 text-white w-60 rounded-md mt-16">ENVIAR MENSAJE <FontAwesomeIcon icon={solid('paper-plane')} className="mr-4 "/></button>
            </div>
          </div>
        </div>
      </form>
      <iframe
        className="w-full h-96"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119501.13226830953!2d-100.48025764545397!3d20.612122843932458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35b8fdc5b9255%3A0x97b094aa561b832f!2sSantiago%20de%20Quer%C3%A9taro%2C%20Qro.!5e0!3m2!1ses-419!2smx!4v1673189221813!5m2!1ses-419!2smx"
        width="600" height="450"  loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
      <Footer />
    </div>
  );

}

export default React.memo(Contact);