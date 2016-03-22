export function setAnimalToFound (piclist, wordlist){
  return {
      type: 'animalfound',
      piclist,
      wordlist
    }
}
