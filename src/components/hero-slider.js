import "./hero-slider.scss";
import PropTypes from "prop-types";
import React from "react";
import SlideItem from "./slide-item";
import Slider from "react-slick";

const HeroSlider = (props) => {
  const sliderSettings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const { data } = props;
  return (
    <section className="hero-slider">
      <Slider {...sliderSettings} className="slider">
        {data.headers.map((header, index) => {
          return <SlideItem data={header} key={index} />;
        })}
      </Slider>
    </section>
  );
};
HeroSlider.propTypes = {
  data: PropTypes.object,
};

export default HeroSlider;
