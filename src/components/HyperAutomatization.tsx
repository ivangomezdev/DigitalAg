import { useState } from "preact/hooks";
import "./hiperautomatizacion.css";
import React from "preact/compat";

const Hiperautomatizacion: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const technologies = [
    {
      id: 1,
      title: "Marketing",
      description: "Para dar visibilidad a tu producto o marca.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 5L10 10M20 5L30 10M20 5V15M10 10V20L20 25M10 10L20 15M30 10V20L20 25M30 10L20 15M20 15V25"
            stroke="#FF8A3D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Análisis de Procesos",
      description: "Para entender y optimizar los flujos de trabajo.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 10H15V15H10V10ZM25 10H30V15H25V10ZM10 25H15V30H10V25ZM25 25H30V30H25V25ZM17.5 17.5H22.5V22.5H17.5V17.5ZM10 17.5H15V22.5H10V17.5ZM25 17.5H30V22.5H25V17.5ZM17.5 10H22.5V15H17.5V10ZM17.5 25H22.5V30H17.5V25Z"
            stroke="#FF8A3D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "BPM (Gestión de Procesos)",
      description: "Para modelar, ejecutar y monitorear los procesos.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="10" stroke="#FF8A3D" strokeWidth="2" />
          <path
            d="M20 10V20L25 25"
            stroke="#FF8A3D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "RPA",
      description: "Para automatizar tareas repetitivas basadas en reglas.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="10"
            width="20"
            height="20"
            rx="2"
            stroke="#FF8A3D"
            strokeWidth="2"
          />
          <path
            d="M15 20H25"
            stroke="#FF8A3D"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M20 15V25"
            stroke="#FF8A3D"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Inteligencia Artificial",
      description: "Para análisis predictivo y toma de decisiones avanzadas.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 10C15 10 10 15 10 20C10 25 15 30 20 30C25 30 30 25 30 20C30 15 25 10 20 10Z"
            stroke="#FF8A3D"
            strokeWidth="2"
          />
          <path
            d="M15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20"
            stroke="#FF8A3D"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M22.5 25C22.5 23.62 23.62 22.5 25 22.5C26.38 22.5 27.5 23.62 27.5 25C27.5 26.38 26.38 27.5 25 27.5"
            stroke="#FF8A3D"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Low-Code/No-Code",
      description:
        "Para desarrollo rápido de aplicaciones sin programación extensa.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 15L10 20L15 25"
            stroke="#FF8A3D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25 15L30 20L25 25"
            stroke="#FF8A3D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 10L20 30"
            stroke="#FF8A3D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === technologies.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? technologies.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  // Calculamos qué tecnologías mostrar (3 a la vez)
  const visibleTechnologies = [
    technologies[activeSlide],
    technologies[(activeSlide + 1) % technologies.length],
    technologies[(activeSlide + 2) % technologies.length],
  ];

  return (
    <section className="hiperautomatizacion">
      <div className="hiperautomatizacion__container">
        <div className="hiperautomatizacion__header">
          <div className="hiperautomatizacion__title-decoration"></div>
          <h1 className="hiperautomatizacion__title">
            Tu empresa mejora con nosotros
            <br />
            <span>
           ¡Hazla crecer!
           </span>
          </h1>
        </div>

        <p className="hiperautomatizacion__description">
          Somos la agencia digital que simplifica tu día a día: desde marketing
          digital y gestión de campañas hasta implementación de bots y
          optimización de flujos de trabajo. Nuestras soluciones personalizadas
          eliminan tareas repetitivas, maximizan recursos y aceleran resultados.
          Tu transformación digital comienza aquí.
        </p>

        <h2 className="hiperautomatizacion__subtitle">Tecnologías Avanzadas</h2>

        <div className="hiperautomatizacion__slider">
          <button
            className="hiperautomatizacion__nav-button hiperautomatizacion__nav-button--prev"
            onClick={prevSlide}
            aria-label="Anterior"
          >
            &#10094;
          </button>

          <div className="hiperautomatizacion__technologies">
            {visibleTechnologies.map((tech, index) => (
              <div className="hiperautomatizacion__tech-card" key={tech.id}>
                <div className="hiperautomatizacion__tech-icon">
                  {tech.icon}
                </div>
                <div>
                  <h3 className="hiperautomatizacion__tech-title">
                    {tech.title}
                  </h3>
                  <p className="hiperautomatizacion__tech-description">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="hiperautomatizacion__nav-button hiperautomatizacion__nav-button--next"
            onClick={nextSlide}
            aria-label="Siguiente"
          >
            &#10095;
          </button>
        </div>

        <div className="hiperautomatizacion__pagination">
          {technologies.map((_, index) => (
            <button
              key={index}
              className={`hiperautomatizacion__pagination-dot ${
                index === activeSlide
                  ? "hiperautomatizacion__pagination-dot--active"
                  : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir a slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hiperautomatizacion;
