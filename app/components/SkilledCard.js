'use client';

import { useState } from "react";

export const SkillCard = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="col-md-4 col-sm-6 col-12 mb-3">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} className="card rounded-3 p-3 h-100 d-flex flex-column align-items-center justify-content-center gap-2">
        <div>
          {isHovered ? skill.hoverImage : skill.image}
        </div>
        <h4 className="text-center">{skill.title}</h4>
        <p className={`text-center ${isHovered && `text-light`}`}>{skill.description}</p>
      </div>
    </div>
  );
};