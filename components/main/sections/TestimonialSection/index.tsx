import React from 'react';

const Index: React.FC = () => (
  <>
    {/* <!--==================== TESTIMONIAL ====================--> */}
    <section className="testimonial section">
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">My client saying</span>

      <div className="testimonial__container container swiper-container">
        <div className="swiper-wrapper">
          {/* <!--==================== TESTIMONIAL 1 ====================--> */}
          <div className="testimonial__content swiper-slide">
            <div className="testimonial__data">
              <div className="testimonial__header">
                <img src="/assets/img/testimonial1.jpg" alt="" className="testimonial__img" />

                <div>
                  <h3 className="testimonial__name">Sara Smith</h3>
                  <span className="testimonial__client">Client</span>
                </div>
              </div>

              <div>
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
              </div>
            </div>

            <p className="testimonial__description">
              Testimonial Text
            </p>
          </div>

          {/* <!--==================== TESTIMONIAL 2 ====================--> */}
          <div className="testimonial__content swiper-slide">
            <div className="testimonial__data">
              <div className="testimonial__header">
                <img src="/assets/img/testimonial2.jpg" alt="" className="testimonial__img" />

                <div>
                  <h3 className="testimonial__name">Matt Robinson</h3>
                  <span className="testimonial__client">Client</span>
                </div>
              </div>

              <div>
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
              </div>
            </div>

            <p className="testimonial__description">
              Testimonial Text
            </p>
          </div>

          {/* <!--==================== TESTIMONIAL 3 ====================--> */}
          <div className="testimonial__content swiper-slide">
            <div className="testimonial__data">
              <div className="testimonial__header">
                <img src="/assets/img/testimonial3.jpg" alt="" className="testimonial__img" />

                <div>
                  <h3 className="testimonial__name">Raul Harris</h3>
                  <span className="testimonial__client">Client</span>
                </div>
              </div>

              <div>
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
              </div>
            </div>

            <p className="testimonial__description">
              Testimonial Text
            </p>
          </div>
        </div>

        {/* <!-- Swiper Pagination --> */}
        <div className="swiper-pagination swiper-pagination-testimonial" />
      </div>
    </section>
  </>
);

export default Index;
