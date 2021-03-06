import React from 'react';

const Index: React.FC = () => (
  <>
    {/* <!--==================== PROJECT IN MIND ====================--> */}
    <section className="project section">
      <div className="project__bg">
        <div className="project__container container grid">
          <div className="project__data">
            <h2 className="project__title">You have a new project</h2>
            <p className="project__description">Contact me now and get a 30% discount</p>
            <a href="#contact" className="button button--flex button--white">
              Contact Me
              <i className="uil uil-message project__icon button__icon" />
            </a>
          </div>

          <img src="assets/img/project.png" alt="" className="project__img" />
        </div>
      </div>
    </section>
  </>
);

export default Index;
