import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GraduationCap, Code, Briefcase } from "lucide-react";

const icons = {
  education: <GraduationCap />,
  code: <Code />,
  work: <Briefcase />,
};

const timelineItems = [
  {
    date: "2024",
    title: "Bootcamp Desarrollo Web",
    description:
      "Fundamentos sólidos en desarrollo web con HTML5, CSS3 y bases de programación para crear sitios responsivos e interactivos.",
    type: "education",
    details: "Desarrollo Web.",
  },
  {
    date: "2024",
    title: "Bootcamp JavaScript",
    description:
      "Desarrollo de lógica y programación con JavaScript para construir funcionalidades dinámicas en sitios web.",
    type: "education",
    details: "JavaScript.",
  },
  {
    date: "2024",
    title: "Bootcamp React Js",
    description:
      "Desarrollo de aplicaciones web modernas con React JS, manejando estados, props y componentes de forma eficiente.",
    type: "education",
    details: "React.",
  },
  {
    date: "2025",
    title: "CP Desarrollo de aplicaciones con tecnología web",
    description:
      "Desarrollo full stack especializado en PHP y SQL, con enfoque en backend, gestión de datos y despliegue de aplicaciones web.",
    type: "education",
    details: "CP.",
  },
];

export default function TimelinePortfolio() {
  const containerRef = useRef(null);
  const resetTimeoutRef = useRef(null); // 🔄 CAMBIO: nuevo ref para timeout de reinicio

  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const delayStart = setTimeout(() => {
      setIsStarted(true);
    }, 2500);

    const moveScroll = () => {
      if (isPaused || !isStarted) return;

      const atBottom =
        container.scrollTop + container.clientHeight >= container.scrollHeight;

      if (atBottom) {
        if (!isAtBottom) {
          setIsAtBottom(true);

          // 🔄 CAMBIO: Esperar 5 segundos y reiniciar scroll
          resetTimeoutRef.current = setTimeout(() => {
            container.scrollTo({ top: 0, behavior: "smooth" }); // 🔄 CAMBIO: animación suave
            setIsAtBottom(false);
            requestAnimationFrame(moveScroll); // 🔄 CAMBIO: reanudar
          }, 5000);
        }
        return;
      }

      if (isAtBottom) return;

      container.scrollTop += 2;
      requestAnimationFrame(moveScroll);
    };

    if (isStarted) {
      requestAnimationFrame(moveScroll);
    }

    return () => {
      clearTimeout(delayStart);
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current); // 
    };
  }, [isPaused, isStarted, isAtBottom]);

  return (
    <motion.div
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        height: "500px",
        overflowY: "hidden",
        scrollBehavior: "smooth",
        padding: "0 .5rem",
      }}
    >
      <VerticalTimeline className="space-y-12">
        {timelineItems.map((item, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            key={index}
          >
            <VerticalTimelineElement
            style={{ marginBottom: "1rem" }}
              date={item.date}
              icon={icons[item.type] || <GraduationCap />}
              iconStyle={{
                background: item.type === "education" ? "#0f172a" : "#4f46e5",
                color: "#fff",
              }}
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p>{item.description}</p>
              {item.details && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  whileHover={{ opacity: 1, height: "auto" }}
                  className="text-sm text-gray-500 mt-2"
                >
                  {item.details}
                </motion.p>
              )}
            </VerticalTimelineElement>
          </motion.div>
        ))}
      </VerticalTimeline>
    </motion.div>
  );
}
