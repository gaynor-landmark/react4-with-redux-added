'use strict'
import React from 'react'

import WordList from './wordlist.jsx'
import PicList from './piclist.jsx'
import {setAnimalToFound} from '../actions/index.js'


module.exports = React.createClass({

  check: function (name) {
    var state = this.props.store.getState()
    console.log("st cn nm", state.checkname, name)
    if (name === state.checkname){
      this.props.store.dispatch({type:'animalfound', name: name})

    } else {
      console.log("nOOOOO")
    }

  },

  render: function () {

    var state = this.props.store.getState()
  console.log("render app.js with props", state.checkname, state.piclist)
    return (
      <div>
        <div>
          <WordList checkname={state.checkname}/>
        </div>
        <div>
          <PicList piclist={state.piclist} check={this.check}/>
        </div>
      </div>
    )

  }

})
