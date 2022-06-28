import PropTypes from "prop-types";
import React from "react";

const SlideItem = (props) => {
  const { data } = props;
  return (
    <div className="slide">
      <div
        className="slide-img"
        style={{ backgroundImage: `url(${data.img})` }}
      ></div>
      <div className="slide-copy">
        <h1 className={data.colorClass}>{data.heroTitle}</h1>
        <p className={data.colorClass}>{data.heroSub}</p>
        <a
          href={data.heroUrl}
          title={data.heroTitle}
          alt="shop now button"
          className="shop-btn"
        >
          shop now
        </a>
      </div>
    </div>
  );
};

SlideItem.propTypes = {
  data: PropTypes.object,
};

export default SlideItem;
