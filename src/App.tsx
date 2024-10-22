import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from "./Pages/Inicio";
import Sobre from './Pages/Sobre';
import Habilidades from './Pages/Habilidades';
import Portfolio from './Pages/Portfolio';
import Educacao from './Pages/Educacao';
import 'aos/dist/aos.css';
import AOS from 'aos';


export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: true, 
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
