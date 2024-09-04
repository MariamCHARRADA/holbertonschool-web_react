import React from "react";
import logo from '../assets/holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from "../utils/utils";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className='App-body'>
        <p>
        Login to access the full dashboard
        </p>
        <label>Email: </label>
        <input></input>
        <label>Password: </label>
        <input></input>
        <button>OK</button>
      </div>
      <footer className='App-footer'>
        <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
}

export default App;
