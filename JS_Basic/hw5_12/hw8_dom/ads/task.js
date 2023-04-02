const rotatorArray = Array.from(document.querySelectorAll('.rotator__case'))
const colors = ['red', 'green', 'black', 'red', 'blue', 'gray'];
const speeds = ['1000', '2000', '1000', '1000', '500', '200'];
let index = 0;

function getRandomNumber(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

function rotate(array, colorArray) {
  let rand_color = colorArray[getRandomNumber(0, colorArray.length)]

  array[index].classList.toggle('rotator__case_active');
  index = (index + 1) % array.length;
  array[index].classList.toggle('rotator__case_active');

  array[index].setAttribute('data-color', rand_color);
}

setInterval(rotate, 1000, rotatorArray, colors)