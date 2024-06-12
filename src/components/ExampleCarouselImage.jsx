// components/ExampleCarouselImage.js
import React from 'react';
import PropTypes from 'prop-types';
import ecommerce from "../img/energy.jpg";
function ExampleCarouselImage({ text }) {
  return (
    <img
      className="d-block w-100"
      src={ecommerce}
      alt={text}
    />
  );
}

ExampleCarouselImage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ExampleCarouselImage;
