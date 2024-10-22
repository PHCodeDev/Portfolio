import { Player } from "@lottiefiles/react-lottie-player";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./Navbar";
import Icons from "./Icons";
import { motion } from "framer-motion";

export default function Inicio() {
  return (
    <div className="scroll-smooth">
      <section
        className="relative h-full lg:h-[100vh] bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(https://i.ibb.co/NSzXJFs/image.png)" }}
      >
        <Navbar></Navbar>

        <div className="w-[350px] lg:w-[1200px] 2xl:w-[1600px] mx-auto flex flex-col lg:flex-row justify-between">
          <motion.div
            className="lg:w-[500px] text-branco"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-[10vh] mt-10 lg:mt-0 lg:text-[17vh] font-bold leading-none ml-[-1px]">
              Web Developer
            </h1>
            <br />
            <p className="text-[2.5vh] lg:text-[3.5vh] font-normal">
              Já trabalhei como desenvolvedor frontend projetando e
              desenvolvendo telas escaláveis, performáticas e responsivas que
              forneciam uma experiência excepcional para o usuário.
            </p>
            <ul className="font-medium text-azul text-center mt-2 lg:w-[500px] lg:flex grid grid-cols-2">
              <li className="flex-grow text-[3vh] bg-verde rounded-md my-2 lg:my-0 basis-[70px]">
                React.js
              </li>
              <li className="flex-grow text-[3vh] bg-verde rounded-md my-2 lg:my-0 basis-[70px] mx-2">
                Tailwind
              </li>
              <li className="flex-grow text-[3vh] bg-verde rounded-md my-2 lg:my-0 basis-[70px]">
                Javascript
              </li>
              <li className="flex-grow text-[3vh] bg-verde rounded-md my-2 lg:my-0 basis-[70px] mx-2">
                UX
              </li>
            </ul>
            <div className="pb-3">
              <Icons></Icons>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <Player
              autoplay
              loop
              src="https://lottie.host/17f6ab65-9ccf-43a6-b33f-9c7211c70b9a/ZRl0GBbAFk.json"
              className="lg:w-[500px] lg:h-[500px]"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
