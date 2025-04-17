import React from 'react';
import './ServicesCarousel.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AdbIcon from '@mui/icons-material/Adb';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import BuildIcon from '@mui/icons-material/Build';

const services = [
  { text: 'Inteligencia Artificial', icon: <AcUnitIcon sx={{color:"#4A90E2",border:"solid 2px #4A90E2",borderRadius:"50%",padding:"5px",boxShadow:"2px 2px #4a91e25e"}}/> },
  { text: 'RPA', icon: <AccessAlarmsIcon sx={{color:"#4A90E2",border:"solid 2px #4A90E2",borderRadius:"50%",padding:"5px",boxShadow:"2px 2px #4a91e25e"}} /> },
  { text: 'Bots conversacionales', icon: <AdbIcon sx={{color:"#4A90E2",border:"solid 2px #4A90E2",borderRadius:"50%",padding:"5px",boxShadow:"2px 2px #4a91e25e"}} /> },
  { text: 'Discovery workshops', icon: <AccountBalanceIcon sx={{color:"#4A90E2",border:"solid 2px #4A90E2",borderRadius:"50%",padding:"5px",boxShadow:"2px 2px #4a91e25e"}} /> },
  { text: 'Estructuración de Datos', icon: <AddCircleIcon sx={{color:"#4A90E2",border:"solid 2px #4A90E2",borderRadius:"50%",padding:"5px",boxShadow:"2px 2px #4a91e25e"}} /> },
  { text: 'Optimización de Procesos', icon: <AnalyticsIcon sx={{color:"#4A90E2",border:"solid 2px #4A90E2",borderRadius:"50%",padding:"5px",boxShadow:"2px 2px #4a91e25e"}} /> },
  { text: 'Automatización', icon: <AutoFixHighIcon sx={{color:"#4A90E2",border:"solid 2px #4A90E2",borderRadius:"50%",padding:"5px",boxShadow:"2px 2px #4a91e25e"}} /> },
  { text: 'Análisis de Datos', icon: <BuildIcon sx={{color:"#4A90E2",border:"solid 2px #4A90E2",borderRadius:"50%",padding:"5px",boxShadow:"2px 2px #4a91e25e"}} /> },
];

const ServicesCarousel = () => {
  // Dividir los servicios en 2 filas de 4 elementos
  const itemsPerRow = 4;
  const rows = [
    services.slice(0, itemsPerRow),
    services.slice(itemsPerRow, itemsPerRow * 2),
  ];

  return (
    <div className="botkers__services">
      {rows.map((row, rowIndex) => (
        <div
          key={`row-container-${rowIndex} `}
          className={`botkers__services-row-container ${
            rowIndex === 1 ? 'botkers__services-row--delayed' : ''
          }`}
        >
          <div className="botkers__services-row botkers__services-row--animated">
            {/* Renderizar los elementos dos veces para el efecto infinito */}
            {[...row, ...row].map((service, itemIndex) => (
              <div
                key={`row-${rowIndex}-item-${itemIndex}`}
                className="botkers__service-item"
              >
                <div className="botkers__service-icon">{service.icon}</div>
                <div className="botkers__service-text">{service.text}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>  
  );
};

export default ServicesCarousel;