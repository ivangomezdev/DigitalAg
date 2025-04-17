import { useState, useEffect } from "preact/hooks";
import "./testimonial-carousel.css";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedId, setExpandedId] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize with debounce
  useEffect(() => {
    let timeoutId;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 100); // Debounce for 100ms
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      category: "Reseña servicio - Automatización",
      quote: "El mejor servicio para automatizar procesos, agradezco a todo el equipo por la ayuda que nos brindaron.",
      rating: 5,
      author: {
        name: "Jenna Milton",
        role: "CEO - TechInt",
        avatar: "https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/df60084f-bd4d-430e-aadc-40cfc734266b/portrait-of-a-woman-in-a-professional-setting-photo2x.png",
      },
    },
    {
      id: 2,
      category: "Reseña servicio - WEB SERVICES",
      quote: "Hice mi página web y un CRM con Liceria. fue muy rápido y aún sigo recibiendo soporte. Volvería a elegirlos sin dudar.",
      rating: 4.2,
      author: {
        name: "Maria Reed",
        role: "CEO - BARCELONA MODA",
        avatar: "https://serxophoto.com/wp-content/uploads/ia-en-la-fotografia.jpg",
      },
    },
    {
      id: 3,
      category: "Reseña servicio - Marketing digital",
      quote: "Arme una campaña de Email marketing y diseñamos unas publicaciones para mi emprendimiento, todo muy bien.",
      rating: 4.8,
      author: {
        name: "Federico Melian",
        role: "CEO - DIGITALERS",
        avatar: "https://www.estudiofotoia.com/_next/image?url=%2Fimages%2Flanding_preview%2F2.webp&w=640&q=75",
      },
    },
    {
      id: 4,
      category: "Reseña servicio - BOT social",
      quote: "Creamos un bot para mis redes sociales, estoy vendiendo sin coger el Movil, 0 problemas y super rapido,gracias!.",
      rating: 4.7,
      author: {
        name: "Martín Moran",
        role: "CEO - DROPSHIPPER",
        avatar: "https://images.imagenmia.com/examples/optimized_images/1727124798001-b565eabd-931e-41ec-916e-1b02d8f08753.webp",
      },
    },
  ];

  const totalTestimonials = testimonials.length;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1
    );
    setExpandedId(null);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalTestimonials - 1 ? 0 : prevIndex + 1
    );
    setExpandedId(null);
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <span key={i} className="testimonial__star testimonial__star--filled">
            ★
          </span>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <span key={i} className="testimonial__star testimonial__star--filled">
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="testimonial__star">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  // Obtener las tarjetas visibles
  const getVisibleTestimonials = () => {
    const visible = [];
    const isMobile = windowWidth <= 1124;

    if (isMobile) {
      // Mostrar 2 tarjetas: actual y siguiente
      for (let i = 0; i < 2; i++) {
        const index = (currentIndex + i) % totalTestimonials;
        visible.push(testimonials[index]);
      }
    } else {
      // Mostrar 3 tarjetas: anterior, actual, siguiente
      for (let i = -1; i < 2; i++) {
        const index = (currentIndex + i) % totalTestimonials;
        visible.push(testimonials[index >= 0 ? index : totalTestimonials + index]);
      }
    }
    return visible;
  };

  return (
    <div className="testimonial-carousel">
      <div className="testimonial-carousel__grid">
        <div className="testimonial-carousel__inner">
          {getVisibleTestimonials().map((testimonial, index) => {
            const isExpanded = expandedId === testimonial.id;
            const isActive = index === (windowWidth <= 1124 ? 0 : 1); // La primera tarjeta es activa en mobile, la del medio en desktop

            return (
              <div
                key={`${testimonial.id}-${currentIndex}-${index}`}
                className={`testimonial ${isActive ? "testimonial--active" : ""} ${
                  isExpanded ? "testimonial--expanded" : ""
                }`}
                onClick={() => isActive && toggleExpand(testimonial.id)}
              >
                <div className="testimonial__content">
                  <div className="testimonial__category">{testimonial.category}</div>
                  <p className="testimonial__quote">{testimonial.quote}</p>
                  {isActive && (
                    <div className="testimonial__rating">
                      <div className="testimonial__stars">{renderStars(testimonial.rating)}</div>
                      <span className="testimonial__rating-value">{testimonial.rating.toFixed(1)}</span>
                    </div>
                  )}
                  <div className="testimonial__footer">
                    <div className="testimonial__author">
                      <div className="testimonial__avatar">
                        <img
                          src={testimonial.author.avatar || "/placeholder.svg"}
                          alt={testimonial.author.name}
                        />
                      </div>
                      <div className="testimonial__author-info">
                        <p className="testimonial__author-name">{testimonial.author.name}</p>
                        <p className="testimonial__author-role">{testimonial.author.role}</p>
                      </div>
                    </div>
                    <div className="testimonial__quote-mark">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 21C3 16.5 6.5 13 11 13V7C11 5.9 10.1 5 9 5H5C3.9 5 3 5.9 3 7V21ZM16 21C16 16.5 19.5 13 24 13V7C24 5.9 23.1 5 22 5H18C16.9 5 16 5.9 16 7V21Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="testimonial-carousel__navigation">
        <button
          onClick={goToPrevious}
          className="testimonial-carousel__nav-button testimonial-carousel__nav-button--prev"
          aria-label="Anterior testimonio"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="testimonial-carousel__counter">
          {currentIndex + 1} / {totalTestimonials}
        </div>
        <button
          onClick={goToNext}
          className="testimonial-carousel__nav-button testimonial-carousel__nav-button--next"
          aria-label="Siguiente testimonio"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 6L15 12L9 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;