import React from 'react';
import { SkillsDataProps } from 'common/types';

const SkillsData: React.FC<SkillsDataProps> = (props) => {
  const { name, level } = props;

  return (
    <div className="skills__data">
      <div className="skills__titles">
        <h3 className="skills__name">{name}</h3>
        <span className="skills_level">{level}</span>
      </div>
      {/* <div className="skills__bar"> */}
      {/*  <span className="skills__percentage skills__html" /> */}
      {/* </div> */}
    </div>
  );
};

export default SkillsData;
