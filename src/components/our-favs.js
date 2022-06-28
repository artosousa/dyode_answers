import "./our-favs.scss";
import PropTypes from "prop-types";
import React from "react";

const OurFavs = (props) => {
  const { data } = props;
  return (
    <section className="our-favorites">
      <div className="fav">
        <div
          className="fav-img"
          style={{ backgroundImage: `url(${data.img})` }}
        ></div>
        <div className="fav-copy">
          <h1>{data.title}</h1>
          <p>{data.sub}</p>
          <a
            href="https://arthursousa.com"
            title="Shop Our Favs"
            alt="shop now button"
            className="shop-btn"
          >
            shop now
          </a>
        </div>
      </div>
    </section>
  );
};

OurFavs.propTypes = {
  data: PropTypes.object,
};

export default OurFavs;
