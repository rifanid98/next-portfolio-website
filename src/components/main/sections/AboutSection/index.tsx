import React, { useState } from 'react';
import Image from 'next/image';
import AboutInfoItem from './AboutInfoItem';

const Index: React.FC = () => {
  const [aboutItems] = useState([
    {
      title: '1,3',
      description1: 'Years',
      description2: 'experience',
    },
    {
      title: '3',
      description1: 'Participated',
      description2: 'in project',
    },
    {
      title: '1',
      description1: 'Companies',
      description2: 'worked',
    },
  ]);

  const aboutMe = {
    headline: 'Saya adalah seorang developer yang antusias, berdedikasi, optimis, pembelajar dan pantang menyerah.',
    detail: 'Tujuan utama saya adalah untuk menerapkan keahlian teknis yang saya miliki dalam semua aspek terkait development dan production untuk memenuhi harapan client dan mendapatkan wawasan darinya. Salah satu tujuan saya adalah untuk terus update dengan perkembangan tren dan tekonologi terbaru. Berikan saya kesempatan yang tepat, saya yakin bisa menjadi talenta yang berguna bagi perusahaan.',
    image: '/assets/img/about.jpg',
  };

  return (
    <>
      {/* <!--==================== ABOUT ====================--> */}
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
          <img src={aboutMe.image} alt="" className="about__img" />

          <div className="about__data">
            <p className="about__description">
              <b>{aboutMe.headline}</b>
              {' '}
              <br />
              {' '}
              {aboutMe.detail}
            </p>

            <div className="about__info">
              {aboutItems?.map((aboutItem) => (
                <AboutInfoItem
                  key={aboutItem.title}
                  title={aboutItem.title}
                  description1={aboutItem.description1}
                  description2={aboutItem.description2}
                />
              ))}
              <div />
            </div>

            <div className="about__buttons">
              <a download="" href="assets/pdf/Alexa-Cv.pdf" className="button button-flex">
                Download CV
                <i className="uil uil-download-alt button__icon" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Index;
