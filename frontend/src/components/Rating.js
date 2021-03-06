import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ value = 1, text, color }) => {
  const ratingText = text ? <span>{text}</span> : null;

  return (
    <div className='rating'>
      <span>
        {[...Array(5)].map((_, i) => {
          const cls =
            value >= i + 1
              ? 'fas fa-star' //full star
              : value >= i + 0.5
              ? 'fas fa-star-half-alt' //half star
              : 'far fa-star'; //empty star
          return <i key={'Star' + i} style={{ color }} className={cls} />;
        })}
      </span>
      {ratingText}
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string,
  color: PropTypes.string,
};

Rating.defaultProps = {
  color: '#ff5563',
  value: 0,
};

export default Rating;
