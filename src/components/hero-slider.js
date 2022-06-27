import "./hero-slider.scss";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import PropTypes from "prop-types";
import React from "react";
import Slider from "react-slick";

const HeroSlider = (props) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const { data } = props;
  return (
    <>
      <Slider {...sliderSettings} className="slider">
        {data.headers.map((header, index) => {
          return (
            <div className="slide" key={index}>
              <div
                className="slide-img"
                style={{ backgroundImage: `url(${header.img})` }}
              ></div>
              <div className="slide-copy">
                <h1 className={header.colorClass}>{header.heroTitle}</h1>
                <p className={header.colorClass}>{header.heroSub}</p>
                <a
                  href={header.heroUrl}
                  title={header.heroTitle}
                  alt="shop now button"
                  className="shop-btn"
                >
                  shop now
                </a>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};
HeroSlider.propTypes = {
  data: PropTypes.object,
};

export default HeroSlider;
