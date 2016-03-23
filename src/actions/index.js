export default function setAnimalToFound (name){

  console.log('in setAnimalT')
  return {
      type: 'animalfound',
      name
    }
}
