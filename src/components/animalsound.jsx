'use strict'
import React from 'react'

module.exports = React.createClass({

  render: function () {
    return (
      <div className='sound'>
        {this.props.sound}
      </div>
    )
  }

})
