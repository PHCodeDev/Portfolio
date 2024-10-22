import { motion } from "framer-motion";
import Icons from "./Icons";
import Navbar from "./Navbar";

export default function Sobre() {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1,} },
  };

  return (
    <div className="scroll-smooth">
      <section
        className="relative h-full lg:h-[100vh] bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(https://i.ibb.co/NSzXJFs/image.png)" }}
      >
        <Navbar />
        <div className="w-[350px] lg:w-[1200px] 2xl:w-[1600px] mx-auto flex flex-col lg:flex-row justify-between">
          <motion.div
            className="my-10 lg:my-auto"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <p className="font-normal lg:text-[3.5vh] text-center lg:text-left text-branco lg:w-[600px]">
              Sou um desenvolvedor web focado em criar soluções rápidas e de alta
              performance que resolvem problemas reais. Com experiência ampla no
              front-end, transformo ideias em projetos funcionais e esteticamente
              elegantes, sempre focando em eficiência e usabilidade. Estou em
              constante aprendizado para aplicar as mais recentes inovações e
              entregar resultados que impulsionam o sucesso dos projetos em que atuo.
            </p>
            <div>
              <Icons />
            </div>
          </motion.div>

          <motion.div
            className="mx-auto lg:mx-0"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <img
              className="h-[400px] lg:h-[480px] mb-4 transition-all duration-300 ease-in-out hover:scale-105"
              src="https://i.ibb.co/TYvdYhz/Group-24.png"
              alt="Imagem do desenvolvedor"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
