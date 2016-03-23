'use strict'
import React from 'react'
import Animal from './animal.jsx'

module.exports = React.createClass({

  render: function () {
console.log("wordlist", this.props.checkname)
    return (
      <div id='words'>
        {this.props.checkname !== 'all' ? ( <h1>Find the {this.props.checkname}</h1> ) : (<h1>You found them all!</h1>) }
      </div>
    )
  }

})
