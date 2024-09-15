import React, { Component } from "react";
import PropTypes from "prop-types";

class NotificationItem extends Component {

  render() {
    const { type, value, html, markAsRead, id } = this.props;

    const handleClick = () => {
      markAsRead(id);
    };
    
    return (
      <li onClick={handleClick} data-notification-type={type}>
        {html ? <span dangerouslySetInnerHTML={html} /> : value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: "default",
  html: null,
  value: "",
};

export default NotificationItem;
