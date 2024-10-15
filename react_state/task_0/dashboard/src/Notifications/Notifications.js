import React, { Component } from "react";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { css, StyleSheet } from "aphrodite";

const opacityAnimation = {
  "0%": { opacity: 0.5 },
  "100%": { opacity: 1 },
};
const bounceAnimation = {
  "0%": { transform: "translateY(0px)" },
  "50%": { transform: "translateY(5px)" },
  "100%": { transform: "translateY(-5px)" },
};

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
    zIndex: 1000,
    "@media (max-width: 900px)": {
      border: "none",
      width: "100vw",
      position: "relative",
      left: "-3vw",
      height: "100vh",
      fontSize: "20px",
      padding: "10px",
      top: 0,
      backgroundColor: "white",
    },
  },
  menuItem: {
    float: "right",
    backgroundColor: "#fff8f8",
    marginRight: "3px",
    fontWeight: "bold",
    position: "absolute",
    top: "0px",
    right: "10px",
    ":hover": {
      cursor: "pointer",
      animationName: [opacityAnimation, bounceAnimation],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3, 3",
    },
  },
  hideItem: {
    display: "none",
  },
  ul: {
    listStyleType: "none",
    padding: 0,
    top: 0,
    margin: "10px",
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
    this.props.handleHideDrawer();
  }
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length >
        this.props.listNotifications.length ||
      nextProps.displayDrawer != this.props.displayDrawer
    );
  }

  render() {
    const { listNotifications, displayDrawer } = this.props;
    const itemDisplay = displayDrawer ? styles.hideItem : styles.menuItem;

    return (
      <>
        <div className={css(itemDisplay)}>
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.notification)}>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.ul)}>
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
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;
