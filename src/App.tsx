import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from "./Pages/Inicio";

import 'aos/dist/aos.css';
import AOS from 'aos';
import Sobre from './Pages/Sobre';
import Habilidades from './Pages/Habilidades';
import Portfolio from './Pages/Portfolio';
import Educacao from './Pages/Educacao';



export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duração da animação
      easing: 'ease-in-out', // efeito de easing
      once: true, // se deve animar apenas uma vez
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/habilidades" element={<Habilidades />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/educacao" element={<Educacao />} />
      </Routes>
    </Router>
  );
}
