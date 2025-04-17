
import { useState } from "preact/hooks"
import "./ClientesCarousel.css"
import React from "preact/compat"

const ClientesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const logos = [
    { id: 1, name: "Sara Haro", src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1744839681/Logo_Moda_Femenina_Minimalista_Negro_y_Rosa_h6ncp5.png", alt: "Logo Oikos" },
    { id: 2, name: "Ojo Dulce", src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1744840014/Logo_Tienda_Ecol%C3%B3gica_Minimalista_Beige-removebg-preview_abbqhc.png", alt: "Logo Tuscany" },
    { id: 3, name: "Larana", src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1744840182/Gold_Luxury_Initial_Logo_1_ayg1xp.png", alt: "Logo Activar Valores" },
    { id: 4, name: "Avery Davis", src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1744839804/Gold_Luxury_Initial_Logo_hlfqtc.png", alt: "Logo Motorysa" },
    { id: 5, name: "Entre Amigos", src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1744839804/Logo_Bar_Urbano_Grafiti_Verde_y_Negro_hjyfs2.png", alt: "Logo Intercol" },
    { id: 6, name: "Roser Castello", src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1744839681/1_bkzbx5.png", alt: "Logo Central Parking System" },
  ]

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : logos.length - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < logos.length - 1 ? prevIndex + 1 : 0))
  }

  // Calculate which logos to display (show 5 at a time)
  const visibleLogos = []
  for (let i = 0; i < 5; i++) {
    const index = (currentIndex + i) % logos.length
    visibleLogos.push(logos[index])
  }

  return (
    <section className="clientes">
      <div className="clientes__header">
        <div className="clientes__divider"></div>
        <h2 className="clientes__title">Nuestros clientes</h2>
      </div>

      <div className="clientes__carousel">
        <button className="clientes__nav clientes__nav--prev" onClick={handlePrev} aria-label="Ver clientes anteriores">
          &lt;
        </button>

        <div className="clientes__logos">
          {visibleLogos.map((logo) => (
            <div key={logo.id} className="clientes__logo-container">
              <img src={logo.src || "/placeholder.svg"} alt={logo.alt} className="clientes__logo" />
            </div>
          ))}
        </div>

        <button className="clientes__nav clientes__nav--next" onClick={handleNext} aria-label="Ver más clientes">
          &gt;
        </button>
      </div>
    </section>
  )
}

export default ClientesCarousel
