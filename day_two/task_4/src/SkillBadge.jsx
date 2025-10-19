import React, { useState } from 'react';
import './index.css';

function SkillBadge({ skill, level = 'Beginner' }) {
  const lvl = (level || 'Beginner').toLowerCase().trim(); // guard & normalize
  const levelClass = `skill-badge ${lvl}`;
  return (
    <span className={levelClass} title={`${skill} - ${level}`}>
      <span className="skill-name">{skill}</span>
      <span className="skill-level">{level}</span>
    </span>
  );
}
export default SkillBadge;