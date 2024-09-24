import React, { Component } from "react";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  notification: {
    padding: "10px",
    paddingTop: "0px",
    border: "1.5px dashed #ec1717",
    position: "fixed",
    right: "5px",
    top: "45px",
    width: "350px",
    height: "105px",
    fontSize: "15px",
  },
  menuItem: {
    marginRight: "3px",
    fontWeight: "bold",
    position: "absolute",
    top: "0px",
    right: "10px",
  },
});

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
  }
  handleClick() {
    console.log("Close button has been clicked");
  }
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  render() {
    const { listNotifications, displayDrawer } = this.props;

    return (
      <>
        <div className={css(styles.menuItem)}>
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.notification)}>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.length === 0 ? (
                <NotificationItem value="No new notification for now" />
              ) : (
                listNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                  />
                ))
              )}
            </ul>
            <button
              style={{
                position: "absolute",
                right: "5px",
                top: "5px",
                cursor: "pointer",
                backgroundColor: "transparent",
                border: "none",
              }}
              aria-label="close"
              onClick={this.handleClick}
            >
              x
            </button>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
