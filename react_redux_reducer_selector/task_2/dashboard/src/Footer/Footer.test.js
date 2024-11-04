import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";
import AppContext from "../App/AppContext";

describe("<Footer />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the text 'Copyright'", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain("Copyright");
  });

  it("does not display the Contact us link when the user is logged out", () => {
    const contextValue = {
      user: {
        isLoggedIn: false,
      },
    };
    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("a").length).toBe(0);
  });

  it("displays the Contact us link when the user is logged in", () => {
    const contextValue = {
      user: {
        isLoggedIn: true,
        email: "user@example.com",
      },
    };
    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("a").length).toBe(1);
    expect(wrapper.find("a").text()).toBe("Contact us");
  });
});
