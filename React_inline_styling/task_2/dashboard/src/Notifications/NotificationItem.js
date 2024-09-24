import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  default: {
    color: "rgb(4, 4, 177)",
  },
  urgent: {
    color: "red",
  },
});

class NotificationItem extends PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;

    const handleClick = () => {
      markAsRead(id);
    };

    const listItemStyle = css(
      type === "urgent" ? styles.urgent : styles.default
    );

    return (
      <li
        onClick={handleClick}
        data-notification-type={type}
        className={listItemStyle}
      >
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
