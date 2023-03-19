// const timer = document.getElementById('timer')
//
// let timerId = setInterval(() => {
//   timer.textContent--;
//   if (+timer.textContent === 0) {
//     clearInterval(timerId);
//     alert('Вы победили в конкурсе');
//   }
// }, 1000);


const timer = document.getElementById('timer');
let answ = prompt('Введите количество секунд: ', '10');
let t =new Date();

t.setHours(0, 0, 0);
t = t.getTime() + +answ * 1000;

let timerId = setInterval(() => {
  let cur_t = new Date(t).toLocaleTimeString();
  timer.textContent = cur_t;
  t -= 1000;

  if (cur_t === '00:00:00') {
    clearInterval(timerId);
    alert('Вы победили в конкурсе');
  }

}, 1000);

