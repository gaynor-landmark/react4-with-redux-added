'use strict'
import React from 'react'

module.exports = React.createClass({

  playSound: function (soundFile) {
    let audio = new Audio(soundFile);
    audio.play()
  },

  handleClick: function (e) {
    console.log('handling', this.props.name, this.props.soundFile)
    this.playSound(this.props.soundFile)
    this.props.check(this.props.name)
  },

  render: function () {
  console.log('animal image', this.props)
    return (
      <div className='img' >
        <a href='#'>
          <img src={this.props.img} onClick={this.handleClick} alt={this.props.name} width='300' height='200'></img>
        </a>
      </div>
    )
  }

})
