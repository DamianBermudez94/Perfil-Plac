import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Carousel extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const images = [
      'https://via.placeholder.com/800x400?text=Image+1',
      'https://via.placeholder.com/800x400?text=Image+2',
      'https://via.placeholder.com/800x400?text=Image+3',
      'https://via.placeholder.com/800x400?text=Image+4',
    ];

    return (
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    );
  }
}

export default Carousel;
