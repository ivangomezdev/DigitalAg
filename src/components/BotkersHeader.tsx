import React from "preact/compat"

import "./botkers-header.css"
import NavBar from "./NavBar"
import ServicesCarousel from "./ServicesCarousel"

const BotkersHeader: React.FC = () => {
  const texts = ['IA', 'DISEÑO', 'WEB', 'MKT', 'LICERIA'];

  return (


      <section className="botkers-wrapper">
      <NavBar />
        <div className="hero"></div>
        <div className="content">
          <h1 className="h1--scalingSize" data-text="Digitaliza tu empresa con nosotros">
          Automatizamos tu negocio y digitalizamos tu éxito.
          </h1>
          
     
      <ServicesCarousel />
        </div>
      </section>


  )
}

export default BotkersHeader
