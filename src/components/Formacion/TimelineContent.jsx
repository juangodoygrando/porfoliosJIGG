import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { GraduationCap, Code, Briefcase } from "lucide-react";

const icons = {
  education: <GraduationCap />,
  code: <Code />,
  work: <Briefcase />,
};

export default function TimelineContent({
  date,
  title,
  description,
  type,
  details,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="mb-12"
    >
      <VerticalTimelineElement
        date={date}
        icon={icons[type] || <GraduationCap />}
        iconStyle={{
          background: type === "education" ? "#0f172a" : "#4f46e5",
          color: "#fff",
        }}
        contentStyle={{
          transition: "all 0.3s ease",
        }}
        
      >
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{description}</p>
        {details && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            whileHover={{ opacity: 1, height: "auto" }}
            className="text-sm text-gray-500 mt-2"
          >
            {details}
          </motion.p>
        )}
      </VerticalTimelineElement>
    </motion.div>
  );
}
