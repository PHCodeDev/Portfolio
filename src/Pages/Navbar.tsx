import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const tabs = [
  { id: 1, label: "Inicio", path: "/" },
  { id: 2, label: "Sobre mim", path: "/sobre" },
  { id: 3, label: "Habilidades", path: "/habilidades" },
  { id: 4, label: "Portfólio", path: "/portfolio" },
  { id: 5, label: "Educação", path: "/educacao" },
];

export default function Navbar() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [menuOpen, setMenuOpen] = useState(false); // Controla o estado do menu móvel

  // Atualizar o estado da aba ativa com base no caminho atual da URL
  useEffect(() => {
    const currentTab = tabs.find((tab) => tab.path === location.pathname);
    if (currentTab) {
      setActiveTab(currentTab.id);
    }
  }, [location.pathname]);

  // Função para alternar o estado do menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="relative z-10">
      {/* Menu em dispositivos móveis */}
      <div className="lg:hidden flex justify-between items-center p-4">
      <button onClick={toggleMenu} className="text-verde text-3xl">
          {menuOpen ? <FaTimes /> : <FaBars />} {/* Ícones de abrir/fechar */}
        </button>
        
        
      </div>

      {/* Menu expandido */}
      <div
        className={`lg:flex lg:py-10 w-full lg:w-[1200px] 2xl:w-[1600px] mx-auto lg:bg-transparent lg:static ${
          menuOpen ? "block" : "hidden"
        } lg:block`}
      >
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between text-branco">
          {tabs.map((tab) => (
            <Link
              to={tab.path}
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setMenuOpen(false); // Fecha o menu ao clicar
              }}
              className={`${
                activeTab === tab.id ? "text-azul" : "hover:text-white/60"
              } lg:text-2xl font-medium px-4 py-2 relative`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="bubble"
                  className="absolute inset-0 bg-verde lg:rounded-full -z-10"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
