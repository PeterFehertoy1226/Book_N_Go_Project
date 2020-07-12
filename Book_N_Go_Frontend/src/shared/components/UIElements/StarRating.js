import React from 'react';


import './StarRating.css';

const StarRating = props => {
    return (
<div className="star-rating">
  <input type="radio" name="stars" value="5"/>
  <input type="radio" name="stars" value="4"/>
  <input type="radio" name="stars" value="3"/>
  <input type="radio" name="stars" value="2"/>
  <input type="radio" name="stars" value="1"/>
</div>


   
    );
};


export default StarRating;