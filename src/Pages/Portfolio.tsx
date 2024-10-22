import { useState } from "react";
import Icons from "./Icons";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Agência de marketing",
    description:
      "Desenvolvi a landinpage para a agência Syrion pensando totalmente na experiência do usuário e em trazer um site simples e elegante para atrair leads.",
    image: "https://i.ibb.co/RQyZJhS/image-2.png",
  },
  {
    title: "Microcrédito",
    description:
      "Desenvolvi a landingpage para o microcrédito com o intuito ser intuitiva e de trazer leads qualificados.",
    image: "https://i.ibb.co/YcKZmXQ/image.png",
  },
  {
    title: "Portfolio Pessoal",
    description:
      "Desenvolvimento de um portfólio pessoal mostrando minhas habilidades técnicas para exibição de projetos profissionais.",
    image: "https://i.ibb.co/frKGWLd/image-1.png",
  },
];

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div className="scroll-smooth">
      <section
        className="relative min-h-screen bg-no-repeat bg-cover overflow-hidden"
        style={{
          backgroundImage: "url(https://i.ibb.co/NSzXJFs/image.png)",
        }}
      >
        <Navbar />
        <div className="w-[350px] lg:w-[1200px] 2xl:w-[1600px] mx-auto my-16 flex flex-col lg:flex-row justify-between">
          <motion.div
            className="font-normal text-[2.5vh] lg:text-[3.5vh] text-branco lg:w-[600px] items-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-[4vh] lg:text-[8vh] font-bold">
              {projects[currentIndex].title}
            </h2>
            <p>{projects[currentIndex].description}</p>

            <div className="flex space-x-4 mt-4">
              <button
                className="text-branco border px-4 py-0 rounded transition-all duration-300 ease-in-out hover:bg-verde hover:text-black hover:shadow-lg hover:border-transparent hover:scale-105"
                onClick={handlePrevious}
              >
                Anterior
              </button>
              <button
                className="text-branco border px-4 py-0 rounded transition-all duration-300 ease-in-out hover:bg-verde hover:text-black hover:shadow-lg hover:border-transparent hover:scale-105"
                onClick={handleNext}
              >
                Próximo
              </button>
            </div>
            <div className="pb-10 lg:pb-0 lg:pt-10">
              <Icons />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              className="w-[330px] mx-auto lg:w-[550px] pb-10 transition-transform duration-500 ease-in-out transform hover:scale-105"
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
