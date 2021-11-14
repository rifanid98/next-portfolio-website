import React from 'react';
import { Education } from 'domain/entity/education';
import { Work } from 'domain/entity/work';
import QualificationData from './QualificationData';

const Index: React.FC = () => {
  const educationContent: Education[] = [
    {
      id: 2,
      name: 'Arkademy Tech Academy',
      place: 'Online',
      start_year: '2019',
      end_year: '2020',
    },
    {
      id: 1,
      name: 'SMK Negeri 1 Ciomas',
      place: 'Kabupaten Ciomas, Bogor',
      start_year: '2014',
      end_year: '2017',
    },
  ];
  const workContent: Work[] = [
    {
      id: 2,
      name: 'PT. NashTa Global Utama',
      place: 'Pancoran Mas, Mampang, Kota Depok',
      start_year: '2020',
      end_year: 'Now',
    },
    {
      id: 1,
      name: 'AMIK Bogor',
      place: 'Bogor',
      start_year: '2015',
      end_year: '2015',
    },
  ];

  return (
    <>
      {/* <!--==================== QUALIFICATION ====================--> */}
      <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div className="qualification__button button--flex qualification__active" data-target="#education">
              <i className="uil uil-graduation-cap qualification__icon" />
              Education
            </div>

            <div className="qualification__button button--flex" data-target="#work">
              <i className="uil uil-briefcase-alt qualification__icon" />
              Work
            </div>
          </div>

          <div className="qualification_sections">
            {/* <!--==================== QUALIFICATION CONTENT 1 ====================--> */}
            <div className="qualification__content qualification__active" data-content id="education">
              {educationContent?.map((education, index) => (
                <QualificationData
                  key={education.id}
                  index={index}
                  id={education.id}
                  name={education.name}
                  place={education.place}
                  start_year={education.start_year}
                  end_year={education.end_year}
                />
              ))}
            </div>

            {/* <!--==================== QUALIFICATION CONTENT 2 ====================--> */}
            <div className="qualification__content" data-content id="work">
              {workContent?.map((work, index) => (
                <QualificationData
                  key={work.id}
                  index={index}
                  id={work.id}
                  name={work.name}
                  place={work.place}
                  start_year={work.start_year}
                  end_year={work.end_year}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
