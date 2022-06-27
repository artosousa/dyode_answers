import "./announce-header.scss";
import PropTypes from "prop-types";
import React from "react";

const AnnounceHeader = (props) => {
  const { data } = props;

  return (
    <div className="announce-bar">
      {data.announcements.map((announcement, index) => {
        return <p key={index}>{announcement.msg}</p>;
      })}
    </div>
  );
};
AnnounceHeader.propTypes = {
  data: PropTypes.object,
};

export default AnnounceHeader;
