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
  ]
}

export default function animals(state = initialState, action){
  switch (action.type){
    case 'animalfound':


    default : return state
  }

}
