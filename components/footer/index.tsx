import React from 'react';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__bg">
      <div className="footer__container container grid">
        <div>
          <h1 className="footer__title">Adnin Rifandi Sutanto Putra</h1>
          <span className="footer__subtitle">Backend Developer</span>
        </div>

        <ul className="footer__links">
          <li>
            <a href="#services" className="footer__link">Services</a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">Portfolio</a>
          </li>
          <li>
            <a href="#contact" className="footer__link">Contactme</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a target="_blank" href="https://www.facebook.com/adnin.rifandi754/" className="footer__social" rel="noreferrer">
            <i className="uil uil-facebook-f" />
          </a>
          <a target="_blank" href="https://www.instagram.com/adninsijawa/" className="footer__social" rel="noreferrer">
            <i className="uil uil-instagram" />
          </a>
          <a target="_blank" href="https://www.twitter.com/" className="footer__social" rel="noreferrer">
            <i className="uil uil-twitter-alt" />
          </a>
        </div>
      </div>

      <p className="footer__copy">&#169; Bedimcode. All rights reserved</p>
    </div>
  </footer>
);

export default Footer;
