// initialize variables
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){ // takes an array and returns one of the items stored in it randomly
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}