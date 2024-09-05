import React from "react";
import PropTypes from "prop-types";

const NotificationItem = ({ type, html, value }) => (
  <li data-notification-type={type} dangerouslySetInnerHTML={html}>
    {value}
  </li>
);

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
};

export default NotificationItem;
