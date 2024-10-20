import { useState } from "react";
import Icons from "./Icons";
import Navbar from "./Navbar";

export default function Educacao() {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="scroll-smooth">
      <section
        className="relative h-[100vh] bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(https://i.ibb.co/NSzXJFs/image.png)" }}
      >
        <Navbar />
        <div className="w-[350px] lg:w-[1200px] 2xl:w-[1600px] mx-auto flex justify-between">
          <div className="my-auto text-branco w-[500px]">
            <h2 className="font-medium text-[10vh]">Formação</h2>
            <ul>
              <li>2021</li>
              <li className="text-[4vh] font-medium">
                Curso técnico em Informática
              </li>
            </ul>
            <ul className="my-6">
              <li>2024</li>
              <li className="text-[4vh] font-medium">
                Formação de cursos Alura (
                <span
                  className="text-verde cursor-pointer"
                  onClick={handlePopupOpen}
                >
                  ver cursos
                </span>
                )
              </li>
            </ul>
            <ul>
              <li>2024</li>
              <li className="text-[4vh] font-medium">
                Faculdade em Análise e Desenvolvimento de Sistemas
              </li>
            </ul>
            <div className="pt-10">
              <Icons />
            </div>
          </div>
          <div>
            <img
              className="h-[500px]"
              src="https://i.ibb.co/TYvdYhz/Group-24.png"
              alt="Educação"
            />
          </div>
        </div>

        {/* Popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
              <h3 className="text-2xl font-bold mb-4">Cursos Alura</h3>
              <div className="max-h-96 overflow-y-auto">
                
               
                <ul className="grid grid-cols-2 gap-5 pl-5">
                  <li>
                    <img
                      src="https://i.ibb.co/dfsCgND/Javascript-paginas-dinamicas.png"
                      alt="JavaScript"
                    />
                  </li>
                  <li>
                    <img
                      src="https://i.ibb.co/WKq0y7x/React.png"
                      alt="React Tailwind"
                    />
                  </li>
                  <li>
                    <img
                      src="https://i.ibb.co/f4TN08W/Javascript-dados-de-uma-api.png"
                      alt="Javascript Api"
                    />
                  </li>
                  <li>
                    <img
                      src="https://i.ibb.co/DVqCcWg/image-34.png"
                      alt="React Vite"
                    />
                  </li>
                  <li>
                    <img
                      src="https://i.ibb.co/x66Xnyq/image-35.png"
                      alt="Tailwind"
                    />
                  </li>
                  
                  <li>
                    <img
                      src="https://i.ibb.co/hXGGP2K/image-33.png"
                      alt="HTML/Css"
                    />
                  </li>
                  <li>
                    <img
                      src="https://i.ibb.co/PgR8Sqm/image-32.png"
                      alt="Figma 2"
                    />
                  </li>
                  <li>
                    <img
                      src="https://i.ibb.co/PhfrCcK/image-36.png"
                      alt="Figma 2"
                    />
                  </li>
                  
                </ul>
              </div>
              <button
                className="mt-6 bg-azul text-white px-4 py-2 rounded"
                onClick={handlePopupClose}
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
