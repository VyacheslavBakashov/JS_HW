const img = document.getElementById('cookie');
const clickCounter = document.getElementById('clicker__counter');
const clickSpeed = document.getElementById('clicker__speed');
let startTime = new Date();
let dif, lastClickTime, gameTime, speed;

img.onclick = () => {
  clickCounter.textContent++;
  lastClickTime = new Date();
  gameTime = (lastClickTime - startTime) / 1000;
  speed = 1 / gameTime;
  clickSpeed.textContent = speed.toFixed(2);

  if (+clickCounter.textContent % 2 !== 0) {
    dif = 20;
  } else {
    dif = -20;
  }

  img.width += dif;
  img.height += dif;
  startTime = lastClickTime;
}