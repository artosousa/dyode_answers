import "./collection-blocks.scss";
import PropTypes from "prop-types";
import React from "react";

const CollectionBlocks = (props) => {
  const { data } = props;
  return (
    <section>
      <div className="container">
        <div className="collection-blocks">
          {data.collecions.map((collection, index) => {
            return (
              <a
                key={index}
                href={collection.url}
                title={collection.title}
                className={`collection-blocks-child collection-${index}`}
              >
                <div
                  className="collection-thumb"
                  style={{ backgroundImage: `url(${collection.img})` }}
                ></div>
                <div className="collection-block-label">{collection.title}</div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

CollectionBlocks.propTypes = {
  data: PropTypes.object,
};

export default CollectionBlocks;
