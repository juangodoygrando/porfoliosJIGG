import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const CardProyect = ({
  title,
  image,
  description,
  languages = [],
  liveDemo,
  githubRepo,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)",
}) => {
  const divRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
    divRef.current.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`relative w-full max-w-md flex flex-col h-full overflow-hidden rounded-3xl border border-white/10 bg-white/15 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-brand-bg/20 group ${className}`}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 80%)`
        }}
      />

      <div className="p-5 z-10 flex flex-col gap-4 h-full">
        <h3 className="text-2xl font-bold text-white mb-1 font-display tracking-widest uppercase">{title}</h3>
        <div className="rounded-xl overflow-hidden shadow-lg h-52 bg-white/5 shrink-0">
          <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
        </div>

        <div className="flex flex-col gap-3 grow">
          {!isMobile || isExpanded ? (
            <p className="text-white/90 text-sm leading-relaxed animate-in fade-in slide-in-from-top-1 duration-300">
              {description}
            </p>
          ) : null}

          {isMobile && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center justify-center gap-1 text-xs font-semibold text-white/70 hover:text-white transition-colors py-1"
            >
              {isExpanded ? (
                <>Ver menos <ChevronUp size={14} /></>
              ) : (
                <>Ver descripción <ChevronDown size={14} /></>
              )}
            </button>
          )}

          <div className="mt-auto">
            <ul className="flex flex-wrap gap-2 justify-center">
              {languages.slice(0, 5).map((lang, index) => (
                <li key={index} className="bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-white/90 border border-white/10">
                  {lang}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="p-4 mt-auto flex justify-center gap-6 z-10">
        {githubRepo && (
          <a
            href={githubRepo}
            rel="noopener noreferrer"
            target={isMobile ? "_self" : "_blank"}
            className="p-3 bg-white/10 rounded-xl hover:bg-white/30 transition-all hover:scale-110 border border-white/10"
            aria-label="GitHub Repo"
          >
            <img
              src="https://s2.svgbox.net/social.svg?ic=github&color=fff"
              alt="GitHub"
              className="w-6 h-6"
            />
          </a>
        )}
        {liveDemo && (
          <a
            href={liveDemo}
            rel="noopener noreferrer"
            target={isMobile ? "_self" : "_blank"}
            className="p-3 bg-white/10 rounded-xl hover:bg-white/30 transition-all hover:scale-110 border border-white/10"
            aria-label="Live Demo"
          >
            <img
              src="https://s2.svgbox.net/octicons.svg?ic=link-bold&color=fff"
              alt="Live Demo"
              className="w-6 h-6"
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default CardProyect;
