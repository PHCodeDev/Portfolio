import Icons from "./Icons";
import Navbar from "./Navbar";

export default function Habilidades() {
  return (
    <div className="scroll-smooth">
      <section
        className="relative h-full lg:h-[100vh] bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(https://i.ibb.co/NSzXJFs/image.png)" }}
      >
        <Navbar></Navbar>

        <div className="w-[350px] lg:w-[1200px] 2xl:w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center my-auto">
            <div className="bg-branco lg:h-[30vh] lg:w-[55vh] my-2 lg:my-0 rounded-xl transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-verde hover:scale-105">
              <div className="flex m-3">
                <img
                  className="h-[45px] w-[40px]"
                  src="https://i.ibb.co/61Dg1SP/Frame.png"
                  alt=""
                />
              </div>

              <div className="mx-4 w-[44vh] lg:w-[46vh]">
                <h2 className="text-[4vh] font-semibold ">TailwindCSS</h2>
                <p className="pb-4 lg:pb-0">
                  Estilização rápida e responsiva com precisão e reutilização de
                  componentes.
                </p>
              </div>
            </div>

            <div className="bg-branco lg:h-[30vh] lg:w-[55vh] my-2 lg:my-0 rounded-xl transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-verde hover:scale-105">
              <div className="flex m-3">
                <span className="text-[#61DAFC] text-4xl">
                  <i className="fab fa-react"></i>
                </span>
              </div>
              <div className="mx-4 w-[44vh] lg:w-[46vh]">
                <h2 className="text-[4vh] font-semibold ">React.js</h2>
                <p className="pb-4 lg:pb-0">
                  Desenvolvimento de interfaces dinâmicas e eficientes com foco
                  em escalabilidade.
                </p>
              </div>
            </div>

            <div className="bg-branco lg:h-[30vh] lg:w-[55vh] my-2 lg:my-0 rounded-xl transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-verde hover:scale-105">
              <div className="flex m-3">
                <span className="text-[#F7DF1E] text-4xl ">
                  <i className="fab fa-js"></i>
                </span>
              </div>
              <div className="mx-4 w-[44vh] lg:w-[46vh]">
                <h2 className="text-[4vh] font-semibold ">JavaScript</h2>
                <p className="pb-4 lg:pb-0">
                  Criação de funcionalidades interativas com código limpo e
                  otimizado.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center lg:my-5">
            <div className="bg-branco lg:h-[30vh] lg:w-[55vh] my-2 lg:my-0 rounded-xl transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-verde hover:scale-105">
              <div className="flex m-3">
                <img
                  className="h-[45px] w-[45px]"
                  src="https://i.ibb.co/wJc6tmt/Group-35-1.png"
                  alt=""
                />
              </div>
              <div className="mx-4 w-[44vh] lg:w-[46vh]">
                <h2 className="text-[4vh] font-semibold ">
                  Experiência do usuário
                </h2>
                <p className="pb-4 lg:pb-0">
                  Criação de experiências intuitivas e centradas no usuário.
                </p>
              </div>
            </div>

            <div className="bg-branco lg:h-[30vh] lg:w-[55vh] my-2 lg:my-0 rounded-xl transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-verde hover:scale-105">
              <div className="flex m-3">
                <span className="text-[#E5532D] text-4xl">
                  <i className="fab fa-html5"></i>
                </span>
              </div>
              <div className="mx-4 w-[44vh] lg:w-[46vh]">
                <h2 className="text-[4vh] font-semibold ">HTML</h2>
                <p className="pb-4 lg:pb-0">
                  Estruturação semântica e acessível de conteúdo para aplicações
                  web.
                </p>
              </div>
            </div>

            <div className="bg-branco lg:h-[30vh] lg:w-[55vh] my-2 lg:my-0 rounded-xl transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-verde hover:scale-105">
              <div className="flex m-3">
                <span className="text-[#214CE5] text-4xl">
                  <i className="fab fa-css3-alt"></i>
                </span>
              </div>
              <div className="mx-4 w-[44vh] lg:w-[46vh]">
                <h2 className="text-[4vh] font-semibold ">CSS</h2>
                <p className="pb-4 lg:pb-0">
                  Estilização responsiva e design adaptativo.
                </p>
              </div>
            </div>
          </div>
          <div className="pb-10 lg:pb-0">
            <Icons></Icons>
          </div>
        </div>
      </section>
    </div>
  );
}
