import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "./utils";


export default function Notifications() {
    const handleClick = () => {
        console.log('Close button has been clicked')
    };
  return (
    <div className="Notifications" style={{position: "relative"}}>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent">
            <span dangerouslySetInnerHTML={{__html: getLatestNotification()}}/>
        </li>

      </ul>
      <button
        style={{ position: "absolute", right: "10px" , top: "10px", cursor: "pointer" }}
        aria-label="close"
        onClick={handleClick}
      >
        x
      </button>
    </div>
  );
}
