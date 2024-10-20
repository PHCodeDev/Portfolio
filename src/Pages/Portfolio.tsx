import { useState } from "react";
import Icons from "./Icons";
import Navbar from "./Navbar";

const projects = [
  {
    title: "Agência de marketing",
    description:
      "Desenvolvi uma landing page atraente e responsiva para a agência Syrion.",
    image: "https://i.ibb.co/RQyZJhS/image-2.png",
  },
  {
    title: "Microcrédito",
    description:
      "Criação de um e-commerce completo para uma ótica com integração de pagamento.",
    image: "https://i.ibb.co/YcKZmXQ/image.png",
  },
  {
    title: "Portfolio Pessoal",
    description:
      "Desenvolvimento de um portfólio pessoal para exibição de projetos profissionais.",
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
        className="relative h-[100vh] bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(https://i.ibb.co/NSzXJFs/image.png)" }}
      >
        <Navbar />
        <div className="w-[350px] lg:w-[1200px] 2xl:w-[1600px] mx-auto my-16 flex justify-between">
          <div className="font-normal text-[3.5vh] text-branco w-[600px] items-center ">
            <h2 className="text-[8vh] font-bold">
              {projects[currentIndex].title}
            </h2>
            <p>{projects[currentIndex].description}</p>
            
            <div className="flex space-x-4 mt-4">
              <button
                className="bg-white text-black px-4 py-2 rounded"
                onClick={handlePrevious}
              >
                Anterior
              </button>
              <button
                className="bg-white text-black px-4 py-2 rounded"
                onClick={handleNext}
              >
                Próximo
              </button>
            </div>
            <div className="pt-10">
              <Icons />
            </div>
          </div>
          <div>
            <img
              className="w-[550px] transition-transform duration-500 ease-in-out transform"
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
