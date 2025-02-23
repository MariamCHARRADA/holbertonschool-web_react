import React from "react";
import { render, screen } from "@testing-library/react";
import AppContext from "../App/AppContext";
import Footer from "./Footer";

describe("Footer Component", () => {
  test("renders the copyright text", () => {
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Footer />
      </AppContext.Provider>
    );

    const copyrightText = screen.getByText(/Copyright \d{4} - Holberton School/i);
    expect(copyrightText).toBeInTheDocument();
  });

  test("does not show contact link when user is not logged in", () => {
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Footer />
      </AppContext.Provider>
    );

    expect(screen.queryByText(/Contact us/i)).not.toBeInTheDocument();
  });

  test("shows contact link when user is logged in", () => {
    const user = { isLoggedIn: true };

    render(
      <AppContext.Provider value={{ user }}>
        <Footer />
      </AppContext.Provider>
    );

    const contactLink = screen.getByText(/Contact us/i);
    expect(contactLink).toBeInTheDocument();
  });
});