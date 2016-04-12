'use strict'
import React from 'react'

module.exports = React.createClass({

  render: function () {
    console.log('wordlist', this.props.checkname)
    return (
      <div id='words'>
        {this.props.checkname !== 'all' ? (<h2>Can you find the {this.props.checkname} ? What does he say?</h2>) : (<h2>You found them all!</h2>)}
      </div>
    )
  }

})
