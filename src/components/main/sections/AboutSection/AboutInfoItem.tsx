import { AboutItem } from 'common/types';
import React from 'react';

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
