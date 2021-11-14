import React from 'react';
import { Portfolio } from 'domain/entity/portfolio';
import Image from 'next/image';

const Index: React.FC = () => {
  const portfolios: Portfolio[] = [
    {
      id: 1,
      name: 'Indonesia National Single Window',
      image_url: '/assets/img/INSW.png',
      description: [
        '- Development dan takeover backend API dari vendor lama menggunakan Express.js untuk website SSm Pengangkut.',
      ],
      demo: false,
    },
    {
      id: 2,
      name: 'Okedok - Healthcare App',
      image_url: '/assets/img/Okedok.png',
      description: [
        '- Mendevelop ulang dan mengkonversi backend API yang sudah ada untuk aplikasi OKEDOK dari PHP CI3 ke Node.js',
        '- Mendevelop backend okedok dengan alur bisnis yang baru',
        '- Memaintain backend okedok dan menambahkan endpoint baru sesuai dengan penambahan fitur-fitur yang ada',
      ],
      demo: false,
    },
    {
      id: 3,
      name: 'Portal NashTaNet - Aplikasi Internal',
      image_url: '/assets/img/portfolio3.jpg',
      description: [
        '- Mendevelop BackEnd untuk aplikasi Portal NashTa Net menggunakan Node.js dan Nest.js sebagai framework',
        '- Mendesain struktur database untuk aplikasi Portal NashTa Net',
      ],
      demo: false,
    },
  ];

  return (
    <>
      {/* <!--==================== PORTFOLIO ====================--> */}
      <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent work</span>

        <div className="portfolio__container container swiper-container">
          <div className="swiper-wrapper">
            {portfolios?.map((portfolio) => (
              <div key={portfolio.name} className="portfolio__content grid swiper-slide">
                <Image
                  width={320}
                  height={213}
                  src={`${portfolio.image_url}`}
                  alt=""
                  className="portfolio__img"
                />

                <div className="portfolio__data">
                  <h3 className="portfolio__title">{portfolio.name}</h3>
                  <p className="portfolio__description">
                    {portfolio.description.map((desc) => (
                      <>
                        {desc}
                        <br />
                      </>
                    ))}
                  </p>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  {portfolio.demo && (
                  <a href="#" className="button button--flex button--small portfolio__button">
                    Demo
                    <i className="uil uil-arrow-right button__icon" />
                  </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* <!-- Swiper Arrow --> */}
          <div className="swiper-button-next">
            <i className="uil uil-angle-right-b swiper-portfolio-icon" />
          </div>
          <div className="swiper-button-prev">
            <i className="uil uil-angle-left-b swiper-portfolio-icon" />
          </div>
          {/* <!-- Swiper Pagination --> */}
          <div className="swiper-pagination" />
        </div>
      </section>
    </>
  );
};

export default Index;
