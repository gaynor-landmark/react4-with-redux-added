var React = require('react')
var render = require('react-dom').render
// var { Router, Route, browserHistory }  = require('react-router')
var App = require('./components/App.jsx')
var domready = require('domready')

domready(function () {
  render((
    <App />
  ), document.querySelector('#app'))
})
