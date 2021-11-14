import React from 'react';
import { QualificationDataProps } from 'common/types';

const QualificationData: React.FC<QualificationDataProps> = (props) => {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    index, name, place, start_year, end_year,
  } = props;

  return (
    <div className="qualification__data">
      {index % 2 === 1 && (
      <>
        <div />
        <div>
          <span className="qualification__rounder" />
          <span className="qualification__line" />
        </div>
      </>
      )}

      <div>
        <h3 className="qualification__title">{name}</h3>
        <span className="qualification__subtitle">{place}</span>
        <div className="qualification__calendar">
          <i className="uil uil-calendar-alt" />
          {start_year}
          {' '}
          -
          {' '}
          {end_year}
        </div>
      </div>

      {index % 2 === 0 && (
        <div>
          <span className="qualification__rounder" />
          <span className="qualification__line" />
        </div>
      )}
    </div>
  );
};

export default QualificationData;
