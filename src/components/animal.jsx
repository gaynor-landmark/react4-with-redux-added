'use strict'
import React from 'react'
import AnimalSound from './animalsound.jsx'
import AnimalImage from  './animalimg.jsx'
import AnimalName from './animalname.jsx'

module.exports = React.createClass({

  render: function () {
    var check = this.props.check
    if (this.props.found){
      return (
      <div>
        <div className='animal'>
          <AnimalName name={this.props.name}/>
          <AnimalImage img={this.props.img} name={this.props.name} check={this.props.check}/>
          <AnimalSound sound={this.props.sound}/>
        </div>
      </div>
      )
    } else {
      return (
        <div>
          <div className='animal'>
            <AnimalImage img={this.props.img} name={this.props.name} check={check}/>
          </div>
        </div>
        )
    }

  }

})
