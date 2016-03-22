'use strict'
import React from 'react'
import Animal from './animal.jsx'

module.exports = React.createClass({

  render: function () {
console.log("wordlist", this.props.checkname)
    return (
      <div id='words'>
        <h1>Find the {this.props.checkname}</h1>
      </div>
    )
  }

})
