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
    <div class="particles">
  
    <div class="particle" style="top: 10%; left: 5%;"></div>
    <div class="particle" style="top: 20%; left: 15%;"></div>
    <div class="particle" style="top: 30%; left: 25%;"></div>
    <div class="particle" style="top: 40%; left: 35%;"></div>
    <div class="particle" style="top: 50%; left: 45%;"></div>
    <div class="particle" style="top: 60%; left: 55%;"></div>
    <div class="particle" style="top: 70%; left: 65%;"></div>
    <div class="particle" style="top: 80%; left: 75%;"></div>
    <div class="particle" style="top: 90%; left: 85%;"></div>
   
  </div>
      <Hiperautomatizacion/>
      <HyperautomationSection/>
      <TestimonialCarousel/>
    
    </section>

    <section style={{display:"none",backgroundColor:"black"}}>
      <ClientesCarousel/>
      <AliadosCarousel/>
    </section >
        
       </main>
       <div style={{display:"none",backgroundColor:"black"}}><Footer/></div>

    </>
  )
}
