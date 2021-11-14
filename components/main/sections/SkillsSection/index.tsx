import React from 'react';
import { Service } from 'domain/entity/service';

const Index: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      name1: 'Backend Developer',
      name2: '(Middle)',
      icon: 'uil-arrow',
      content: [
        'JavaScript & TypeScript',
        'Node.js (Express.js & Nest.js)',
        'MySQL, PostgreSQL & MongoDB',
        'Golang (Golang Echo)',
        'Kotlin Android',
      ],
    },
    {
      id: 2,
      name1: 'Frontend Developer',
      name2: '(Junior)',
      icon: 'uil-brackets-curly',
      content: [
        'JavaScript & TypeScript',
        'React.js & Next.js',
        'Redux',
      ],
    },
    {
      id: 3,
      name1: 'UI/UX Designer',
      name2: '(Hobby)',
      icon: 'uil-palette',
      content: [
        'Design Thinking',
        'User Research',
        'Usability Test',
        'Single Ease Question as Usability Metric',
      ],
    },
  ];

  return (
    <>
      {/* <!--==================== SERVICES ====================--> */}
      <section className="services section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">What am i good at</span>

        <div className="services__container container grid">
          {/* <!--==================== SERVICES 1 ====================--> */}
          {services?.map((service) => (
            <div key={service.id} className="services__content">
              <div>
                <i className={`uil ${service.icon} services__icon`} />
                <h3 className="services__title">
                  {service.name1}
                  <br />
                  {' '}
                  {service.name2}
                </h3>
              </div>

              <span className="button button--flex button--small button--link services__button">
                View More
                <i className="uil uil-arrow-right button__icon" />
              </span>

              <div className="services__modal">
                <div className="services__modal-content">
                  <h4 className="services__modal-title">
                    {service.name1}
                    <br />
                    {' '}
                    {service.name2}
                  </h4>
                  <i className="uil uil-times services__modal-close" />

                  <ul className="services__modal-services grid">
                    {service.content.map((serviceContent) => (
                      <li key={Math.random().toString().substr(0, 3)} className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon" />
                        <p>{serviceContent}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Index;
