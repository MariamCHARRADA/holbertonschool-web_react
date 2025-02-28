import $ from 'jquery';
import '../header/header.css';
const logo = require("../../assets/holberton-logo.jpg");

$(document).ready(function () {
  $('body').append('<div id="logo"></div>');
  $('body').append('<h1>Holberton Dashboard</h1>');
  console.log('Init header');
});
