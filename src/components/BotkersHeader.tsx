import React from "preact/compat"

import "./botkers-header.css"
import NavBar from "./NavBar"
import ServicesCarousel from "./ServicesCarousel"

const BotkersHeader: React.FC = () => {
  const texts = ['IA', 'DISEÑO', 'WEB', 'MKT', 'LICERIA'];

  return (
    <div className="botkers">
<NavBar/>

      <div className="botkers__hero">
     

        <div className="botkers__hero-content">
          <h1 className="botkers__hero-title">
           DIGITALIZA TU EMPRESA
            <div>
               SOMOS <div class="dropping-texts botkers__hero-title--blue">
               {texts.map((text, index) => (
          <div key={index} className={`text-item text-item-${index + 1}`}>
            {text}
          </div>
        ))}
</div>
            </div>
          </h1>

          <p className="botkers__hero-text">
            Podemos ayudarte a potenciar tus resultados, automatizando y optimizando tus procesos empresariales con el
            uso de las tecnologías más avanzadas. Creemos que la tecnología, más que la solución, es una herramienta
            para potenciar el rol de los colaboradores y optimizar las operaciones de nuestros clientes.
          </p>

          <div className="botkers__hero-buttons">
            <button className="botkers__btn botkers__btn--outline">Ver más</button>
            <button className="botkers__btn botkers__btn--filled">Explorar</button>
          </div>
        </div>

    

        <div className="botkers__contact-side">
          <button className="botkers__contact-btn botkers__contact-btn--side">Contáctanos</button>
        </div>
      </div>

    <ServicesCarousel/>
    </div>
  )
}

export default BotkersHeader
