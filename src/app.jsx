import { useEffect, useRef, useState } from 'preact/hooks'
import Hiperautomatizacion from './components/HyperAutomatization.js'
import BotkersHeader from "./components/BotkersHeader.js"
import './app.css'
import HyperautomationSection from './components/HyperAutomatization-section.jsx'
import ClientesCarousel from './components/Clients.jsx'
import AliadosCarousel from './components/AliadosCarousel.jsx'
import Footer from './components/Footer.jsx'
import TestimonialCarousel from './components/Testimonial-carousel.jsx'

export function App() {
  const [count, setCount] = useState(0)
  const ballRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ballRef.current) return;
      
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      
      // Calcula la posición diagonal
      const startX = window.innerWidth - 200;
      const endX = 0;
      const startY = 0;
      const endY = window.innerHeight;
      
      const currentX = startX - (scrollPercent * (startX - endX));
      const currentY = startY + (scrollPercent * (endY - startY));
      
      // Aplica la nueva posición
      ballRef.current.style.transform = `translate(${currentX}px, ${currentY}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Limpia el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
       <BotkersHeader />
       <main>
    <section className="hiperCont">
    <div className="blur-ball" ref={ballRef}></div>
      <Hiperautomatizacion/>
      <HyperautomationSection/>
      <TestimonialCarousel/>
      <div class="wave-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" style="width: 100%; height: 100%;">
            <path  fill="#ffffff" fill-opacity="1" d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,176C672,181,768,139,864,128C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
    </div>
    </section>

    <section>
      <ClientesCarousel/>
      <AliadosCarousel/>
    </section>
        
       </main>
       <Footer/>
    </>
  )
}
