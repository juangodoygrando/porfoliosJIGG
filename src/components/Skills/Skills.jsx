import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ name, icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
    transition={{
      duration: 0.5,
      delay,
    }}
    whileHover={{
      rotate: [0, -2, 2, -2, 2, 0],
      scale: 1.08,
      transition: { duration: 0.4 }
    }}
    className="bg-white/15 backdrop-blur-md border border-white/20 p-4 rounded-xl flex flex-col items-center justify-center gap-4 hover:bg-white/20 transition-all duration-300 shadow-xl group relative overflow-hidden cursor-default"
  >
    <div className="relative p-4 rounded-full bg-linear-to-br from-white/25 to-white/5 border border-white/30 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.4)] group-hover:scale-110 group-hover:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.4),inset_0_2px_10px_rgba(255,255,255,0.6)] transition-all duration-500">
      <div className="absolute inset-0 rounded-full bg-linear-to-tr from-transparent via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <img
        src={`/skills/${icon}.svg`}
        alt={name}
        className="w-12 h-12 object-contain brightness-100 group-hover:brightness-125 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300 relative z-10"
      />
    </div>
    <span className="font-display tracking-wider text-sm md:text-base font-light text-center text-white/90 group-hover:text-white transition-colors">{name}</span>

    <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
  </motion.div>
);

const Category = ({ title, skills, delayOffset }) => (
  <div className="flex flex-col gap-4">
    <motion.h3
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: delayOffset }}
      className="text-xl font-display uppercase tracking-widest border-l-4 border-white/50 pl-3"
    >
      {title}
    </motion.h3>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {skills.map((skill, index) => (
        <SkillCard
          key={skill.name}
          {...skill}
          delay={delayOffset + (index * 0.1)}
        />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML5', icon: 'html' },
    { name: 'CSS3', icon: 'css' },
    { name: 'SCSS', icon: 'scss' },
    { name: 'Tailwind', icon: 'tailwind' },
    { name: 'JavaScript', icon: 'javaScript' },
    { name: 'TypeScript', icon: 'typeScript' },
    { name: 'React', icon: 'react' },
    { name: 'Angular', icon: 'angular' },
    { name: 'Bootstrap', icon: 'bootstrap' },
    { name: 'PostCSS', icon: 'postCSS' },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: 'nodeJs' },
    { name: 'PHP', icon: 'php' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'APIs REST', icon: 'api' },
  ];

  const toolsSkills = [
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' },
    { name: 'Jest', icon: 'jest' },
    { name: 'PNPM', icon: 'pnpm' },
    { name: 'Vite', icon: 'vite' },
    { name: 'ESLint', icon: 'ESLint' },
  ];

  return (
    <div className="w-full mx-auto p-1 md:p-8 flex flex-col gap-10">
      <Category title="Frontend" skills={frontendSkills} delayOffset={0.2} />
      <Category title="Backend" skills={backendSkills} delayOffset={0.6} />
      <Category title="Tools" skills={toolsSkills} delayOffset={0.8} />
    </div>
  );
};

export default Skills;

