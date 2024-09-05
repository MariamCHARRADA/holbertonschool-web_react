import React from "react";
import "../Notifications/Notifications.css";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";

export default function Notifications() {
  const handleClick = () => {
    console.log("Close button has been clicked");
  };
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem data-priority="default">New course available</NotificationItem>
        <NotificationItem data-priority="urgent">New resume available</NotificationItem>
        <NotificationItem data-priority="urgent">
          <span dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
        </NotificationItem>
      </ul>
      <button
        style={{
          position: "absolute",
          right: "10px",
          top: "10px",
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
  );
}
