import React from "react";
import { Linkedin, Mail, Github } from "lucide-react";

const Contact = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-2 py-8 md:p-12 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl text-center flex flex-col gap-8 mb-8 mt-4">
      <p className="text-white/90 text-lg md:text-2xl font-light leading-relaxed">
        ¡Hablemos! Estoy disponible para conectar en LinkedIn, GitHub o por
        correo.
      </p>

      <div className="flex justify-center gap-6 md:gap-12 flex-wrap">
        <a
          href="https://www.linkedin.com/in/juanignacio-godoygrando/"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-3 md:p-4 bg-white/5 rounded-full hover:bg-[#0077b5]/20 transition-all duration-300 hover:scale-110 border border-white/5 hover:border-[#0077b5]/50"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-[#0077b5] transition-colors" />
        </a>

        <a
          href="mailto:juangodoygrando@gmail.com"
          className="group p-3 md:p-4 bg-white/5 rounded-full hover:bg-red-500/20 transition-all duration-300 hover:scale-110 border border-white/5 hover:border-red-500/50"
          aria-label="Email"
        >
          <Mail className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-red-400 transition-colors" />
        </a>

        <a
          href="https://github.com/juangodoygrando"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-3 md:p-4 bg-white/5 rounded-full hover:bg-black/20 transition-all duration-300 hover:scale-110 border border-white/5 hover:border-white/30"
          aria-label="GitHub"
        >
          <Github className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-white transition-colors" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
