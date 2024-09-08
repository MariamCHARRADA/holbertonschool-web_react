import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];
const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "default", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

function App({ isLoggedIn = false }) {
  return (
    <>
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
      <div className="App">
        <Header />
        {!isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        <Footer />
      </div>
    </>
  );
}
App.propTypes = {
  isLoggedIn: PropTypes.bool,
};
export default App;
