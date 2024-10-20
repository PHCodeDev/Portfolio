import { Player } from "@lottiefiles/react-lottie-player";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./Navbar";
import Icons from "./Icons";

export default function Inicio() {
  return (
    <div className="scroll-smooth">
      <section
        className="relative h-[100vh] bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(https://i.ibb.co/NSzXJFs/image.png)" }}
      >
        <Navbar></Navbar>

        <div className="w-[350px] lg:w-[1200px] 2xl:w-[1600px] mx-auto flex justify-between">
          <div className="w-[500px] text-branco">
            <h1 className="text-[17vh] font-bold leading-none ml-[-1px]">
              Web Developer
            </h1>
            <br />
            <p className="text-[3.5vh] font-normal">
              Já trabalhei como desenvolvedor frontend projetando e
              desenvolvendo telas escaláveis, performáticas e responsivas que
              forneciam uma experiência excepcional para o usuário.
            </p>
            <ul className="font-medium text-azul text-center mt-2 lg:w-[500px] flex flex-wrap">
              <li className="flex-grow text-[3vh] bg-verde rounded-md basis-[70px]">
                React.js
              </li>
              <li className="flex-grow text-[3vh] bg-verde rounded-md basis-[70px] mx-2">
                Tailwind
              </li>
              <li className="flex-grow text-[3vh] bg-verde rounded-md basis-[70px]">
                Javascript
              </li>
              <li className="flex-grow text-[3vh] bg-verde rounded-md basis-[70px] mx-2">
                UX
              </li>
            </ul>
            <Icons></Icons>
            
          </div>

          <div>
            <Player
              autoplay
              loop
              src="https://lottie.host/17f6ab65-9ccf-43a6-b33f-9c7211c70b9a/ZRl0GBbAFk.json"
              className="w-[500px] h-[500px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
