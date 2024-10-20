import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

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

  // Atualizar o estado da aba ativa com base no caminho atual da URL
  useEffect(() => {
    const currentTab = tabs.find((tab) => tab.path === location.pathname);
    if (currentTab) {
      setActiveTab(currentTab.id);
    }
  }, [location.pathname]); // Atualiza sempre que o pathname mudar

  return (
    <div className="text-branco relative z-10 flex py-10 w-[350px] mx-auto lg:w-[1200px] 2xl:w-[1600px]">
      {tabs.map((tab) => (
        <Link
          to={tab.path}
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? "text-azul" : "hover:text-white/60"
          } text-2xl font-medium px-4 py-1.5 relative`}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="bubble"
              className="absolute inset-0 bg-verde rounded-full -z-10"
              transition={{ type: "spring", duration: 0.6 }}
            />
          )}
          {tab.label}
        </Link>
      ))}
    </div>
  );
}
