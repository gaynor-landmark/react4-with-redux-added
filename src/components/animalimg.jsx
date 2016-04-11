'use strict'
import React from 'react'

module.exports = React.createClass({

  handleClick: function (e) {
    console.log('handling', this.props.name)
    this.props.check(this.props.name)
  },

  render: function () {
    return (
      <div className='img' >
        <a href='#'>
          <img src={this.props.img} onClick={this.handleClick} alt={this.props.name} width='300' height='200'></img>
        </a>
      </div>
    )
  }

})
