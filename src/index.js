var React = require('react')
var render = require('react-dom').render
var App = require('./components/App.jsx')
var domready = require('domready')

import {createStore} from 'redux'
import animals from './reducers/animals'

domready(function () {
  var store = createStore(animals)
  console.log(store.getState())
  function renderApp () {
    render(
      (
        <App store={store} />
      ), document.querySelector('#app'))

  }
  store.subscribe(renderApp)
  renderApp()
})
