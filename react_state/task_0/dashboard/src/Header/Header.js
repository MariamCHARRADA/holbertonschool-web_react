import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottomStyle: "solid",
    borderColor: "#e62d2d",
    marginTop: "10px",
  },
  h1: {
    color: "#e62d2d",
    alignSelf: "center",
    fontSize: "xx-large",
  },
  logo: {
    height: "150px",
    justifyContent: "left",
    alignSelf: "left",
    marginBottom: "10px",
  },
});
function Header() {
  return (
    <header className={css(styles.header)}>
      <img src={logo} className={css(styles.logo)} alt="logo" />
      <h1 className={css(styles.h1)}>School dashboard</h1>
    </header>
  );
}

export default Header;
