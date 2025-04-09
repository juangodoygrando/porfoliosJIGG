import React from "react";
import BounceCards from "./BounceCards";

const Skills = () => {
  const images = [
    "https://s2.svgbox.net/files.svg?ic=html",
    "https://s2.svgbox.net/files.svg?ic=css",
    "https://s2.svgbox.net/files.svg?ic=scss",
    "https://s2.svgbox.net/files.svg?ic=git",
    "https://s2.svgbox.net/files.svg?ic=php",
    "https://s2.svgbox.net/files.svg?ic=mysql",
    "https://s2.svgbox.net/files.svg?ic=js",
    "https://s2.svgbox.net/files.svg?ic=reactjs",
  ];

  const transformStyles = images.map((_, index) => {
    const angle = (index % 2 === 0 ? 5 : -5) * (1 + Math.floor(index / 3));
    const offset = (index - Math.floor(images.length / 2)) * 70;
    return `rotate(${angle}deg) translate(${offset}px)`;
  });

  return (
    <div style={{ overflow: "visible" }} className="divBounce">
      <BounceCards
        className="custom-bounceCards"
        images={images}
        containerWidth={800}
        containerHeight={620}
        animationDelay={0.8}
        animationStagger={0.08}
        easeType="elastic.out(1, 0.5)"
        transformStyles={transformStyles}
        enableHover={window.innerWidth > 768}
      />
    </div>
  );
};

export default Skills;
