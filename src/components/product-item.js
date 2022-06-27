import PropTypes from "prop-types";
import React from "react";

const ProductItem = (props) => {
  const { data } = props;
  return (
    <>
      <div className="slide-img">
        <img alt={`Product Thumbnail for ${data.title}`} src={data.img} />
        <div className="slide-footer">
          <h3>{data.title}</h3>
          <p>{data.tag}</p>
          <p className="product-price">
            <span className="dollar">$</span>
            {data.price}
          </p>
        </div>
      </div>
    </>
  );
};

ProductItem.propTypes = {
  data: PropTypes.object,
};

export default ProductItem;
