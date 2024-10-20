import Icons from "./Icons";
import Navbar from "./Navbar";

export default function Sobre() {
  return (
    <div className="scroll-smooth">
      <section
        className="relative h-[100vh] bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(https://i.ibb.co/NSzXJFs/image.png)" }}
      >
        <Navbar></Navbar>
        <div className="w-[350px] lg:w-[1200px] 2xl:w-[1600px] mx-auto flex justify-between">
          <div className="my-auto ">
            <p className="font-medium text-[3.5vh] text-branco w-[600px] ">
              Sou um desenvolvedor web focado em criar soluções rápidas e de
              alta performance que resolvem problemas reais. Com experiência
              ampla no front-end, transformo ideias em projetos funcionais e
              esteticamente elegantes, sempre focando em eficiência e
              usabilidade. Apaixonado por tecnologia, estou em constante
              aprendizado para aplicar as mais recentes inovações e entregar
              resultados que impulsionam o sucesso dos projetos em que atuo.
            </p>
            <div className="pt-10">
            <Icons></Icons>
            </div>
          </div>
          <div>
            <img className="h-[500px]" src="https://i.ibb.co/TYvdYhz/Group-24.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
