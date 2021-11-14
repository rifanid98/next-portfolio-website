import { NavigationMenuProps } from 'common/types';
import React from 'react';

const NavItem: React.FC<NavigationMenuProps> = (props) => {
  const { name, target, icon } = props;

  return (
    <li className="nav__item">
      <a href={`#${target}`} className="nav__link active-link">
        <i className={`uil ${icon} nav__icon`} />
        {' '}
        {name}
      </a>
    </li>
  );
};

export default NavItem;
