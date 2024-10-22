import { useState } from "react";

export default function SocialLinks() {
  const [copyMessage, setCopyMessage] = useState(""); 

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("pedroh124816@gmail.com");
      setCopyMessage("E-mail copiado!");
    } catch (err) {
      console.error("Falha ao copiar o e-mail:", err);
      const input = document.createElement("input");
      input.value = "pedroh124816@gmail.com";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopyMessage("E-mail copiado!"); 
    }

    setTimeout(() => setCopyMessage(""), 2000); 
  };

  return (
    <div className="relative">
      <ul className="flex space-x-4 mt-10">
        {[
          {
            platform: "whatsapp",
            color: "#25D366",
            icon: "fab fa-whatsapp",
            link: "https://wa.me/88988123553",
          },
          {
            platform: "linkedin",
            color: "#0077B5",
            icon: "fab fa-linkedin-in",
            link: "https://www.linkedin.com/in/pedro-henrique-de-morais-628946258/", 
          },
          {
            platform: "github",
            color: "#333333",
            icon: "fab fa-github",
            link: "https://github.com/PHCodeDev", 
          },
          {
            platform: "google",
            color: "#DB4437",
            icon: "fab fa-google",
            onClick: handleCopyEmail, 
          },
        ].map(({ platform, color, icon, link, onClick }) => (
          <li key={platform} className="relative group">
            <span className="absolute bottom-full mb-2 w-32 text-center text-xs bg-white text-black rounded py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </span>
            <span
              className={`flex justify-center items-center w-12 h-12 rounded-full text-black transition-transform transform hover:scale-110 shadow-lg`}
              style={{ backgroundColor: color }}
            >
              {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <i className={icon}></i>
                </a>
              ) : (
                <span onClick={onClick} style={{ cursor: 'pointer' }}>
                  <i className={icon}></i>
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>
      {copyMessage && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-4 bg-white text-black text-sm p-2 rounded shadow-lg z-10">
          {copyMessage}
        </div>
      )}
    </div>
  );
}
