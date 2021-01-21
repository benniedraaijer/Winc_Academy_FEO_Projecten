import React from 'react';
//import ratingSelection from './SongInput'

const ratingOnClick = (event) => {
  document.querySelector('#dropdown-song-rating-button').textContent = event.target.title;
  document.querySelector('#dropdown-song-rating').value = event.target.title;
  event.preventDefault();

  console.log(document.querySelector('#dropdown-song-rating').value);
};

export const passingRating = () => document.querySelector('#dropdown-song-rating').value;

export const DropDown = () => {
  return (
    <div id='dropdown-song-rating' value=''>
      <button id='dropdown-song-rating-button' disabled>
        Rating
      </button>
      <div id='dropdown-content'>
        <a title='5 Stars' href='' onClick={ratingOnClick}>
          5 Stars
        </a>
        <a title='4 Stars' href='' onClick={ratingOnClick}>
          4 Stars
        </a>
        <a title='3 Stars' href='' onClick={ratingOnClick}>
          3 Stars
        </a>
        <a title='2 Stars' href='' onClick={ratingOnClick}>
          2 Stars
        </a>
        <a title='1 Star' href='' onClick={ratingOnClick}>
          1 Stars
        </a>
      </div>
    </div>
  );
};
