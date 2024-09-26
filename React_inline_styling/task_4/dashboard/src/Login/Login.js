import React from "react";
import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  body: {
    flexGrow: 1,
    textAlign: "left",
    padding: "20px",
  },
  input: {
    marginRight: "10px",
    marginLeft: "10px",
    border: "none",
  },
  label: {
    marginBottom: "5px",
    display: "inline-block",
  },
  button: {
    display: "block",
    borderColor: "orange",
    background: "none",
  },
  form: {
    display: "flex",
    alignItems: "center",
  },
});
function Login() {
  return (
    <>
      <div className={css(styles.body)}>
        <p>Login to access the full dashboard</p>
        <div className={css(styles.form)}>
          <label className={css(styles.label)}>Email: </label>
          <input className={css(styles.input)}></input>
        </div>
        <div className={css(styles.form)}>
          <label className={css(styles.label)}>Password: </label>
          <input className={css(styles.input)}></input>
        </div>

        <button className={css(styles.button)}>OK</button>
      </div>
    </>
  );
}

export default Login;
