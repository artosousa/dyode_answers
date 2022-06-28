import "./new-arrivals.scss";
import NextImg from "../images/next.png";
import PrevImg from "../images/prev.png";
import ProductItem from "./product-item";
import PropTypes from "prop-types";
import React from "react";
import Slider from "react-slick";

function NextArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { className, onClick } = props;
  return (
    <>
      <img
        className={className}
        alt="next slide"
        title="Next"
        src={NextImg}
        onClick={onClick}
      />
    </>
  );
}
function PrevArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { className, onClick } = props;
  return (
    <>
      <img
        alt="next slide"
        title="Next"
        className={className}
        src={PrevImg}
        onClick={onClick}
      />
    </>
  );
}
const NewArrivals = (props) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const { data } = props;
  return (
    <section className="new-arrivals">
      <h1>New Arrivals</h1>
      <Slider {...sliderSettings} className="slider container">
        {data.products.map((product, index) => {
          return <ProductItem data={product} key={index} />;
        })}
      </Slider>
    </section>
  );
};
NewArrivals.propTypes = {
  data: PropTypes.object,
};

export default NewArrivals;
