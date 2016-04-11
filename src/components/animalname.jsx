'use strict'
import React from 'react'

module.exports = React.createClass({
  render: function () {
    return (
      <div className='name'>
        {this.props.name}
      </div>
    )
  }
})
