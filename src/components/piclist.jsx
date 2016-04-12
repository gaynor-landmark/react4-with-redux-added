'use strict'
import React from 'react'
import Animal from './animal.jsx'

module.exports = React.createClass({

  render: function () {
    var animals = []
    animals = this.props.piclist
    var check = this.props.check
    return (
      <div id='pics' >
        {animals.map(function (a) {
          return <Animal name={a.name} img={a.img} sound={a.sound} found={a.found} check={check} soundFile={a.soundFile}/>
        })}
      </div>
    )
  }
})
