import React from "react";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";
import PropTypes from "prop-types";

export default function Notifications({ displayDrawer }) {
  const handleClick = () => {
    console.log("Close button has been clicked");
  };
  return (
    <>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className="Notifications">
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem
              type="urgent"
              html={{ __html: getLatestNotification() }}
            />
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
            onClick={handleClick}
          >
            x
          </button>
        </div>
      )}
    </>
  );
}
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};
Notifications.defaultProps = {
  displayDrawer: false,
};
