export default function setAnimalToFound (name) {
  console.log('in setAnimalToFound')
  return {
    type: 'animalfound',
    name
  }
}
