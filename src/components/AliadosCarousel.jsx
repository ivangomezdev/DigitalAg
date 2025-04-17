
import { useState } from "preact/hooks"

import "./AliadosCarousel.css"
import React from "preact/compat"

const AliadosCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const logos = [
    { id: 1, name: "Botmaker", src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1744840511/rocket_mqvaoy.png", alt: "Logo Botmaker" },
    { id: 2, name: "Rocketbot", src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1744840698/logo_plain_eaksqq.png" },
    { id: 3, name: "Google Cloud", src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1744840510/images_fjhhtk.png", alt: "Logo Google Cloud" },
    {
      id: 4,
      name: "Automation Anywhere",
      src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1744840509/gpt_mfswqp.webp",
      alt: "Logo Automation Anywhere",
    },
    {
      id: 5,
      name: "Firebase",
      src: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1744840509/firebase_cf5x8g.png",
      alt: "Logo Automation Anywhere",
    },
  ]

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : logos.length - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < logos.length - 1 ? prevIndex + 1 : 0))
  }

  // Calculate which logos to display (show 4 at a time)
  const visibleLogos = []
  for (let i = 0; i < 4; i++) {
    const index = (currentIndex + i) % logos.length
    visibleLogos.push(logos[index])
  }

  return (
    <section className="aliados">
      <div className="aliados__header">
        <div className="aliados__divider"></div>
        <h2 className="aliados__title">Nuestros aliados</h2>
      </div>

      <div className="aliados__carousel">
        <button className="aliados__nav aliados__nav--prev" onClick={handlePrev} aria-label="Ver aliados anteriores">
          &lt;
        </button>

        <div className="aliados__logos">
          {visibleLogos.map((logo) => (
            <div key={logo.id} className="aliados__logo-container">
              <img src={logo.src || "/placeholder.svg"} alt={logo.alt} className="aliados__logo" />
            </div>
          ))}
        </div>

        <button className="aliados__nav aliados__nav--next" onClick={handleNext} aria-label="Ver más aliados">
          &gt;
        </button>
      </div>
    </section>
  )
}

export default AliadosCarousel
