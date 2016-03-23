// define initial state

const initialState = {
  wordlist : [
  {name:'duck', found:false},
  {name:'bee', found:false},
  {name:'cow', found:false},
  {name:'cat', found:false}
],
  piclist : [
    {name:'duck', img:'./images/duck.jpg', sound:'quack', found:false},
    {name:'cat', img:'./images/cat.jpg', sound:'meow', found:false},
    {name:'bee', img:'./images/bee.jpg', sound:'buzz', found:false},
    {name:'cow', img:'./images/cow.jpg', sound:'moo', found:false}
  ],
  checkname : 'duck'
}

export default function animals(state = initialState, action){
  switch (action.type){
    case 'animalfound':
    console.log('in reducers animals', state)

      var newwordlist = state.wordlist
      newwordlist.map(function(word){
        if (word.name === action.name){
          word.found = true
        }
      })
      var newpiclist = state.piclist
      newpiclist.map(function(animal){
        if (animal.name === state.name){
          animal.found = true
        }
      })
      console.log("new", newpiclist)
      var set = false
      var newcheckname = state.checkname
      state.wordlist.map(function(word){
        if (word.found === false && set === false){
          newcheckname = word.name
          set = true
        }
      })
    default : return state
  }

}
