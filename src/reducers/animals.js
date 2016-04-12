import Immutable from 'immutable'

// define initial state

const initialState = {
  wordlist: [
  {name: 'duck', found: false},
  {name: 'bee', found: false},
  {name: 'cow', found: false},
  {name: 'cat', found: false},
  {name: 'lion', found: false},
  {name: 'dog', found: false},
  {name: 'pig', found: false}
  ],
  piclist: [
    {name: 'duck', img: './images/duck.jpg', sound: 'quack', found: false, soundFile: './sounds/duck.wav'},
    {name: 'cat', img: './images/cat.jpg', sound: 'meow', found: false, soundFile: './sounds/cat.wav'},
    {name: 'lion', img: './images/lion.jpg', sound: 'roar', found: false, soundFile: './sounds/lion.wav'},
    {name: 'bee', img: './images/bee.jpg', sound: 'buzz', found: false, soundFile: './sounds/bee.wav'},
    {name: 'cow', img: './images/cow.jpg', sound: 'moo', found: false, soundFile: './sounds/cow.wav'},
    {name: 'pig', img: './images/pig.jpg', sound: 'oink', found: false, soundFile: './sounds/pig.wav'},
    {name: 'dog', img: './images/dog.jpg', sound: 'woof', found: false, soundFile: './sounds/dog.wav'}
  ],
  checkname: 'duck'
}

export default function animals (state = initialState, action) {
  var newState = Immutable.Map(state)
  console.log(' -- more pics', newState)
  switch (action.type) {
    case 'animalfound':
      var newwordlist = state.wordlist
      newwordlist.map(function (word) {
        if (word.name === action.name) {
          word.found = true
        }
      })
      console.log('newwordlist', newwordlist)
      var newpiclist = state.piclist
      newpiclist.map(function (animal) {
        if (animal.name === action.name) {
          animal.found = true
        }
      })
      console.log('new', newpiclist)
      var set = false
      var newcheckname = 'all'
      newwordlist.map(function (word) {
        if (word.found === false && set === false) {
          newcheckname = word.name
          set = true
        }
      })
      newState.wordlist = newwordlist
      newState.piclist = newpiclist
      newState.checkname = newcheckname
      return newState
    default : return state
  }
}
