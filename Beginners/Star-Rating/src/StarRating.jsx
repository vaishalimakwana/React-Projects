import React from 'react';
import { useState } from 'react';
import { MdOutlineStar } from 'react-icons/md';
import { MdOutlineStarBorder } from 'react-icons/md';
import vintageCar from './assets/vintage-car.png';

export default function StarRating() {
  const stars = [1, 2, 3, 4, 5];
  const [hover, setHover] = useState(null);
  const [selectStar, setSelectStar] = useState(null);

  function clickStar(star) {
    setSelectStar(selectStar === star ? null : star);
  }
  return (
    <div>
      <div className="star-wrapper">
        <div className="star-text">Rate the Image!!</div>
        <div className="star-box">
          {stars.map((star) => (
            <div
              key={star}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(null)}
              onClick={() => clickStar(star)}
              className="star-rating"
            >
              {(hover !== null ? hover : selectStar) >= star ? (
                <MdOutlineStar size={50} color="gold" />
              ) : (
                <MdOutlineStarBorder size={50} color="gold" />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="vintage-car-wrapper">
        <div className="vintage-car">
          <img src={vintageCar} />
        </div>
      </div>
    </div>
  );
}
