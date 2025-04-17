
import React from "preact/compat"
import "./Footer.css"

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Lógica para manejar la suscripción
    console.log("Formulario enviado")
  }

  return (
    <footer className="footer">
    
      <div className="footer__container">
        <div className="footer__column footer__column--brand">
          <div className="footer__logo">
            <span className="footer__logo-text footer__logo-text--blue">LI</span>
            <span className="footer__logo-text footer__logo-text--dark">CERIA</span>
            <div className="footer__tagline">Asistentes digitales</div>
          </div>
          <p className="footer__description">
            Facilitamos el cumplimiento de tus objetivos de negocio ágilmente y en corto plazo a través de la
            automatización y robotización de procesos
          </p>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">Qué hacemos</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#" className="footer__link">
                Inteligencia Artificial
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                RPA
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Asistentes Digitales
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Desarrollo de Bots
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Bots Conversacionales
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Estructuración de Datos
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Marketing digital
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Desarrollo web
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">Accesos directos</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#" className="footer__link">
                Quiénes somos
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Aliados
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Contáctanos
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
               Clientes
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Reseñas
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__column footer__column--contact">
          <h3 className="footer__heading">Contáctanos</h3>
          <a href="mailto:contacto@botkers.com" className="footer__email">
            <span className="footer__email-icon">✉</span>
            contacto@liceria.com
          </a>

          <div className="footer__newsletter">
            <h3 className="footer__heading">Suscríbete</h3>
            <p className="footer__newsletter-text">Ingresa tu correo e infórmate de nuestras últimas noticias</p>
            <form className="footer__form" onSubmit={handleSubmit}>
              <div className="footer__form-group">
                <input
                  type="email"
                  className="footer__input"
                  placeholder="Agrega aquí tu correo"
                  aria-label="Correo electrónico"
                />
                <button type="submit" className="footer__button">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="footer__copyright">
        COPYRIGHT © 2025 - Desarrollo de página web y Posicionamiento SEO
      
      </div>
    </footer>
  )
}

export default Footer
