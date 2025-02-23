import React, { useContext } from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import AppContext from "../App/AppContext";

function Footer() {
  // Consume context values using useContext
  const { user } = useContext(AppContext);

  return (
    <footer className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {/* Conditionally render the contact link if the user is logged in */}
      {user.isLoggedIn && (
        <p>
          <a href="/contact">Contact us</a>
        </p>
      )}
    </footer>
  );
}

export default Footer;