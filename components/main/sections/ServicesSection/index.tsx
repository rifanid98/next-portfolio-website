import React from 'react';
import { Service } from 'domain/entity/service';

const Index: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      name1: 'UI/UX',
      name2: 'Designer',
      icon: 'uil-web-grid',
      content: [
        'I develop the user interface',
        'I develop the user interface',
        'I develop the user interface',
        'I develop the user interface',
      ],
    },
    {
      id: 1,
      name1: 'UI/UX',
      name2: 'Designer',
      icon: 'uil-web-grid',
      content: [
        'I develop the user interface',
        'I develop the user interface',
        'I develop the user interface',
        'I develop the user interface',
      ],
    },
    {
      id: 1,
      name1: 'UI/UX',
      name2: 'Designer',
      icon: 'uil-web-grid',
      content: [
        'I develop the user interface',
        'I develop the user interface',
        'I develop the user interface',
        'I develop the user interface',
      ],
    },
  ];

  return (
    <>
      {/* <!--==================== SERVICES ====================--> */}
      <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>

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
