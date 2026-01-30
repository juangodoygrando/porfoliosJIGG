
const Aboutme = () => {
  return (
    <div className="w-full h-auto mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 p-4 md:p-12 bg-white/15 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl overflow-hidden items-center">
      <div className="flex items-center justify-center">
        <img
          src="https://i.postimg.cc/dVzLnG9r/41e05968-1aad-4b65-9d53-c3d1aa9cf056.jpg"
          alt="Juan Ignacio Godoy Grando"
          className="max-w-[80%] lg:max-w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col justify-center gap-4 text-white/90  text-sm md:text-lg leading-relaxed">
        <p>
          Soy Juan Ignacio, desarrollador Frontend orientado a construir
          productos digitales modernos. Trabajo con JavaScript, React y Angular
          desarrollando aplicaciones web (SPA) con interfaces eficientes,
          accesibles y orientadas a una buena experiencia de usuario (UI/UX).
        </p>

        <p>
          Manejo TypeScript, Tailwind, HTML5 y CSS3, integrando APIs REST y
          aplicando buenas prácticas de responsive design, performance web y
          accesibilidad. Colaboro con equipos utilizando Git y metodologías
          ágiles, aportando comunicación, calidad y foco en resultados.
        </p>

        <p>
          Me motiva participar en proyectos donde pueda aportar soluciones,
          aprendizaje continuo y evolución técnica.
        </p>

        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
          <a
            className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg hover:no-underline transition-all duration-300 hover:scale-105 font-display tracking-wide text-lg shadow-lg text-center"
            href="https://drive.google.com/uc?export=download&id=1p_bNfDUmkjXOYj5wILBhFBV01ORbCDOf"
            download="Juan Ignacio Godoy Grando - CV - ES.pdf"
          >
            📄 CV Español
          </a>
          <a
            className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg hover:no-underline transition-all duration-300 hover:scale-105 font-display tracking-wide text-lg shadow-lg text-center"
            href="https://drive.google.com/uc?export=download&id=1kvWRvteNWKWPyzGHTzsAnmwq_6uB6no7"
            download="Juan Ignacio Godoy Grando - CV - EN.pdf"
          >
            📄 CV Inglés
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
