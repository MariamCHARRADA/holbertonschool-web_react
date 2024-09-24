import React from "react";
import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  body: {
    flexGrow: 1,
    textAlign: "left",
    padding: "40px",
  },
  input: {
    marginRight: "10px",
  },
});
function Login() {
  return (
    <>
      <div className={css(styles.body)}>
        <p>Login to access the full dashboard</p>
        <label>Email: </label>
        <input className={css(styles.input)}></input>
        <label>Password: </label>
        <input className={css(styles.input)}></input>
        <button>OK</button>
      </div>
    </>
  );
}

export default Login;
