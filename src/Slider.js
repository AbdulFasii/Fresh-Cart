import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import"./slider.css"

export default function SimpleSlider() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="container mt-4">
        <Slider {...settings}>
          <div className="container rounded-3 slider-1">
            <h3>1</h3>
          </div>
          <div className="container rounded-3 slider-2">
            <h3>2</h3>
          </div>
        </Slider>
      </div>
    );
  }
