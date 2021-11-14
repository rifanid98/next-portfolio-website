import React from 'react';
import { SkillsProps } from 'common/types';
import SkillsData from './SkillsData';

const Skills: React.FC<SkillsProps> = (props) => {
  const {
    icon, name, experience, isActive, subSkill,
  } = props;

  return (
    <div className={`skills__content ${isActive ? 'skills__open' : 'skills__close'}`}>
      <div className="skills__header">
        <i className={`uil ${icon} skills__icon`} />

        <div>
          <h1 className="skills__title">{name}</h1>
          <span className="skills__subtitle">{experience}</span>
        </div>

        <i className="uil uil-angle-down skills__arrow" />
      </div>

      <div className="skills__list grid">
        {subSkill?.map((skill) => (
          <SkillsData
            id={skill.id}
            key={skill.id}
            name={skill.name}
            level={skill.level}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
