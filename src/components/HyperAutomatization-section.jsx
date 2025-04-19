import React from "preact/compat";
import "./hyperautomation-section.css";
import Cube from "./Cube";

export default function HyperautomationSection() {
  return (
    <section className="hyperautomation__content">
      <video
        className="hyperautomation__video"
        loop
        muted
        src="https://res.cloudinary.com/dc5zbh38m/video/upload/v1745083978/brain_online-video-cutter.com_kp2bfu.mp4"
        autoplay
      />

      <div className="hyperautomation__text">
        <h2>Transformamos tu empresa con soluciones innovadoras</h2>
        <ul>
          <li>
            <span className="material-symbols-outlined">check</span>{" "}
            Automatizamos procesos
          </li>
          <li>
            <span className="material-symbols-outlined">check</span> Creamos
            Bots
          </li>
          <li>
            <span className="material-symbols-outlined">check</span> IA
          </li>
          <li>
            <span className="material-symbols-outlined">check</span> Desarrollo
            WEB
          </li>
          <li>
            <span className="material-symbols-outlined">check</span> Marketing
          </li>
        </ul>
      </div>
    </section>
  );
}
