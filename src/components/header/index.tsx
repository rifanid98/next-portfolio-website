import React from 'react';
import Navigation from './navigation';
import { NavigationMenuProps } from '../../common/types';

const Header: React.FC = () => {
  const menus: NavigationMenuProps[] = [
    {
      name: 'Home',
      target: 'home',
      icon: 'uil-estate',
    },
    {
      name: 'About',
      target: 'about',
      icon: 'uil-user',
    },
    {
      name: 'Skills',
      target: 'skills',
      icon: 'uil-file-alt',
    },
    // {
    //   name: 'Services',
    //   target: 'services',
    //   icon: 'uil-briefcase-alt',
    // },
    {
      name: 'Portfolio',
      target: 'portfolio',
      icon: 'uil-scenery',
    },
    {
      name: 'Contactme',
      target: 'contact',
      icon: 'uil-message',
    },
  ];

  return (
    <header className="header" id="header">
      <Navigation menus={menus} />
    </header>
  );
};

export default Header;
