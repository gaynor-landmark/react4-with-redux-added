'use strict'
import React from 'react'
import store from '../../store.js'
import WordList from './wordlist.jsx'
import PicList from './piclist.jsx'

module.exports = React.createClass({

  check: function (name) {
    if (name === this.state.checkname){
      var newwordlist = this.state.wordlist
      newwordlist.map(function(word){
        if (word.name === name){
          word.found = true
        }

      })

      var newpiclist = this.state.piclist

      newpiclist.map(function(animal){
        if (animal.name === name){
          animal.found = true
        }

      })
      console.log("new", newpiclist)
      var set = false
      var newcheckname = this.state.checkname
      this.state.wordlist.map(function(word){
        if (word.found === false && set === false){
          newcheckname = word.name
          set = true
        }
      })
      this.setState({
        wordlist: newwordlist,
        piclist: newpiclist,
        checkname: newcheckname
      })
    } else {
      console.log("nOOOOO")
    }

  },

  render: function () {
    console.log("render app", store)
    return (
      <div>
        <div>
          <WordList checkname={this.state.checkname}/>
        </div>
        <div>
          <PicList piclist={this.state.piclist} check={this.check}/>
        </div>
      </div>
    )

  }

})
