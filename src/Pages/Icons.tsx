export default function Icons() {
  return (
    <ul className="flex space-x-4 mt-10">
      {[
        {
          platform: "whatsapp",
          color: "#25D366",
          icon: "fab fa-whatsapp",
        },
        {
          platform: "linkedin",
          color: "#0077B5",
          icon: "fab fa-linkedin-in",
        },
        {
          platform: "github",
          color: "#333333",
          icon: "fab fa-github",
        },
        {
          platform: "google",
          color: "#DB4437",
          icon: "fab fa-google",
        },
      ].map(({ platform, color, icon }) => (
        <li key={platform} className="relative group">
          <span className="absolute bottom-full mb-2 w-32 text-center text-xs bg-white text-black rounded py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {platform.charAt(0).toUpperCase() + platform.slice(1)}
          </span>
          <span
            className={`flex justify-center items-center w-12 h-12 rounded-full bg-white text-black transition-transform transform hover:scale-110 shadow-lg`}
            style={{ backgroundColor: color }}
          >
            <i className={icon}></i>
          </span>
        </li>
      ))}
    </ul>
  );
}
