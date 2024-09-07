import React from "react";
import PropTypes from "prop-types";

const NotificationItem = ({ type, html, value }) => {
  const className = type === "urgent" ? "urgent-notif" : "default-notif";
  return (
    <li className={className}>
      {html ? <span dangerouslySetInnerHTML={html}></span> : value}
    </li>
  );
};
NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
};
NotificationItem.defaultProps = {
  type: "default",
  html: null,
  value: "",
};

export default NotificationItem;
