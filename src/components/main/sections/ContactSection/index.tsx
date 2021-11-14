import React from 'react';

const Index: React.FC = () => (
  <>
    {/* <!--==================== CONTACT ME ====================--> */}
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get int touch</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <i className="uil uil-phone contact_icon" />

            <div>
              <h3 className="contact__title">Call Me</h3>
              <span className="contact__subtitle">0896-0641-5122</span>
            </div>
          </div>

          <div className="contact__information">
            <i className="uil uil-envelope contact_icon" />

            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">adninsijawa.office@gmail.com</span>
            </div>
          </div>

          <div className="contact__information">
            <i className="uil uil-map-marker contact_icon" />

            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">Bogor - Jawa Barat</span>
            </div>
          </div>
        </div>

        <form action="" className="contact__form grid">
          <div className="contact__inputs grid">
            <div className="contact__content">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="name" className="contact__label">Name</label>
              <input type="text" className="contact__input" id="name" />
            </div>
            <div className="contact__content">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="email" className="contact__label">Email</label>
              <input type="email" className="contact__input" id="email" />
            </div>
          </div>

          <div className="contact__content">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="project" className="contact__label">Project</label>
            <input type="text" className="contact__input" id="project" />
          </div>

          <div className="contact__content">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="message" className="contact__label">Message</label>
            <textarea name="" id="message" cols={0} rows={7} className="contact__input" />
          </div>

          <div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="button button--flex">
              Send Message
              <i className="uil uil-message button__icon" />
            </a>
          </div>
        </form>
      </div>
    </section>
  </>
);

export default Index;
