import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AppContext from "../App/AppContext";
import Header from "./Header";

describe("Header Component", () => {
  test("renders the logo and title", () => {
    render(
      <AppContext.Provider
        value={{ user: { isLoggedIn: false }, logOut: jest.fn() }}
      >
        <Header />
      </AppContext.Provider>
    );

    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();

    const title = screen.getByText(/School dashboard/i);
    expect(title).toBeInTheDocument();
  });

  test("does not show logout section when user is not logged in", () => {
    render(
      <AppContext.Provider
        value={{ user: { isLoggedIn: false }, logOut: jest.fn() }}
      >
        <Header />
      </AppContext.Provider>
    );

    expect(screen.queryByText(/Welcome/i)).not.toBeInTheDocument();
  });

  test("shows logout section when user is logged in", () => {
    const user = { email: "john.doe@example.com", isLoggedIn: true };

    render(
      <AppContext.Provider value={{ user, logOut: jest.fn() }}>
        <Header />
      </AppContext.Provider>
    );

    const welcomeMessage = screen.getByText(/Welcome john.doe@example.com/i);
    expect(welcomeMessage).toBeInTheDocument();

    const logoutLink = screen.getByText(/\(logout\)/i);
    expect(logoutLink).toBeInTheDocument();
  });

  test("calls logOut when logout link is clicked", () => {
    const logOutMock = jest.fn();
    const user = { email: "john.doe@example.com", isLoggedIn: true };

    render(
      <AppContext.Provider value={{ user, logOut: logOutMock }}>
        <Header />
      </AppContext.Provider>
    );

    const logoutLink = screen.getByText(/\(logout\)/i);
    fireEvent.click(logoutLink);

    expect(logOutMock).toHaveBeenCalledTimes(1);
  });
});