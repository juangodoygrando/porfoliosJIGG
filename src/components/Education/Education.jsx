import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const EducationItem = ({ date, title, details, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    className="relative pl-8 pb-8 border-l border-white/20 last:border-l-0 last:pb-0 group"
  >
    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-white group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />

    <div className="flex flex-col gap-2 overflow-hidden">
      <span className="flex items-center gap-2 text-xs md:text-sm text-white/70 font-display tracking-wider">
        <Calendar size={18} />
        {date}
      </span>
      <h3 className="text-lg md:text-2xl font-bold flex items-center gap-2 wrap-break-word leading-tight">
        <GraduationCap className="shrink-0 text-white/80" size={20} />
        <span className="wrap-break-word">{title}</span>
      </h3>
      <div className="text-white/80 text-sm md:text-base font-light leading-relaxed wrap-break-word hyphenauto">
        {details}
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  const educationData = [
    {
      date: '2025 - 2026',
      title: 'IT Academy - Bootcamp Frontend',
      details: 'HTML5, CSS3 y Tailwind CSS. Maquetación responsive y buenas prácticas de UI. JavaScript(ES6+) y TypeScript. Node.js APIs RESTful. Git, GitHub y metodologías ágiles. Testing básico e integración continua. Desarrollo de aplicaciones frontend con Angular'
    },
    {
      date: '2025 - 2025',
      title: 'Certificado profesionalidad: DAW',
      details: 'Programación en HTML, CSS y JavaScript. Desarrollo de interfaces interactivas y dinámicas. Aplicación de principios de accesibilidad y responsive design. Desarrollo de Aplicaciones con Tecnologías Web. Interacción con bases de datos mediante PHP y SQL.'
    },
    {
      date: '2023 - 2024',
      title: 'Bootcamp de React Js',
    },
    {
      date: '2023 - 2024',
      title: 'Bootcamp de Javascript',
    },
    {
      date: '2023 - 2024',
      title: 'Bootcamp de Desarrollo Web',
    },
  ];


  return (
    <div className="w-full max-w-4xl mx-auto px-2 py-4 md:p-8">
      <div className="bg-white/15 backdrop-blur-md p-5 md:p-8 rounded-3xl border border-white/10 shadow-2xl">
        {educationData.map((item, index) => (
          <EducationItem key={index} {...item} delay={index * 0.2} />
        ))}
      </div>
    </div>
  );
};

export default Education;
