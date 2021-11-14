import React from 'react';
import { NavigationProps } from 'common/types';
import NavItem from './navitem';

const Navigation: React.FC<NavigationProps> = (props) => {
  const { menus } = props;

  return (
    <>
      <nav className="nav container">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className="nav__logo">Alexa</a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            {menus?.map((menu) => (
              <NavItem
                key={menu.target}
                name={menu.name}
                target={menu.target}
                icon={menu.icon}
              />
            ))}
          </ul>
          <i className="uil uil-times nav__close" id="nav-close" />
        </div>

        <div className="nav__btns">
          {/* <!-- Theme change button --> */}
          <i className="uil uil-moon change-theme" id="theme-button" />

          <div className="nav__toggle" id="nav-toggle">
            <i className="uil uil-apps" />
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navigation;
