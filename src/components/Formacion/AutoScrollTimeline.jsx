import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineContent from "./TimelineContent";

export default function AutoScrollTimeline({ items }) {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let scrollY = 0;
    const interval = setInterval(() => {
      const container = containerRef.current;
      if (!container || isPaused) return;

      scrollY += 1;
      if (scrollY >= container.scrollHeight - container.clientHeight) {
        scrollY = 0;
      }

      controls.start({ scrollTop: scrollY });
    }, 30);

    return () => clearInterval(interval);
  }, [controls, isPaused]);

  return (
    <motion.div
      ref={containerRef}
      animate={controls}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        height: "500px",
        overflowY: "hidden",
        scrollBehavior: "smooth",
      }}
    >
      <VerticalTimeline>
        {items.map((item, index) => (
          <TimelineContent key={index} {...item} />
        ))}
      </VerticalTimeline>
    </motion.div>
  );
}
