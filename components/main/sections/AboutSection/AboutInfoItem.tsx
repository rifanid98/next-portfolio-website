import React from 'react';
import { AboutItem } from 'common/types';

const AboutInfoItem: React.FC<AboutItem> = (props) => {
  const { title, description1, description2 } = props;

  return (
    <div>
      <span className="about__info-title">{title}</span>
      <span className="about__info-name">
        {description1}
        <br />
        {' '}
        {description2}
      </span>
    </div>
  );
};

export default AboutInfoItem;
