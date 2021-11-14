import { SkillsProps } from 'common/types';
import React from 'react';
import Skills from './Skills';

const Index: React.FC = () => {
  const skillsMenusLeft: SkillsProps[] = [
    {
      id: 1,
      icon: 'uil-arrow',
      name: 'Backend Developer',
      experience: '1.3 years',
      isActive: true,
      subSkill: [
        {
          id: Math.random().toString().substr(0, 3),
          name: 'JavaScript',
          level: '',
        },
        {
          id: Math.random().toString().substr(0, 3),
          name: 'TypeScript',
          level: '',
        },
        {
          id: Math.random().toString().substr(0, 3),
          name: 'Node.js',
          level: '',
        },
        {
          id: Math.random().toString().substr(0, 3),
          name: 'Express.js',
          level: '',
        },
        {
          id: Math.random().toString().substr(0, 3),
          name: 'Sequelize ORM',
          level: '',
        },
        {
          id: Math.random().toString().substr(0, 3),
          name: 'TypeORM',
          level: '',
        },
        {
          id: Math.random().toString().substr(0, 3),
          name: 'MySQL',
          level: '',
        },
        {
          id: Math.random().toString().substr(0, 3),
          name: 'PostgreSQL',
          level: '',
        },
      ],
    },
  ];
  const skillsMenusRight: SkillsProps[] = [
    {
      id: 2,
      icon: 'uil-brackets-curly',
      name: 'Frontend Developer',
      experience: 'More than 4 years',
      isActive: false,
      subSkill: [
        {
          id: Math.random().toString().substr(0, 3),
          name: 'HTML',
          level: 'hecker',
        },
        {
          id: Math.random().toString().substr(0, 3),
          name: 'HTML',
          level: 'hecker',
        },
      ],
    },
  ];

  return (
    <>
      {/* <!--==================== SKILLS ====================--> */}
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical skills</span>

        <div className="skills__container container grid">
          <div>
            {skillsMenusLeft?.map((skillMenu) => (
              <Skills
                key={skillMenu.id}
                id={skillMenu.id}
                name={skillMenu.name}
                experience={skillMenu.experience}
                icon={skillMenu.icon}
                isActive={skillMenu.isActive}
                subSkill={skillMenu.subSkill}
              />
            ))}
          </div>

          <div>
            {skillsMenusRight?.map((skillMenu) => (
              <Skills
                key={skillMenu.id}
                id={skillMenu.id}
                name={skillMenu.name}
                experience={skillMenu.experience}
                icon={skillMenu.icon}
                isActive={skillMenu.isActive}
                subSkill={skillMenu.subSkill}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
