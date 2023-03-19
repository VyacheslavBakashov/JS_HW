const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

const getHole = index => document.getElementById(`hole${index}`);

const setZero = () => {
  dead.textContent = '0';
  lost.textContent = '0';
}

for (let i = 1; i < 10; i++) {
  let curHole = getHole(i);

  curHole.onclick = () => {
    if (curHole.className.includes('hole_has-mole')) {
      dead.textContent++
    } else {
      lost.textContent++
    }

    if (+dead.textContent === 10) {
      alert('Вы выйграли!')
      setZero();
    } else if (+lost.textContent === 5) {
      alert('Вы проиграли!!!');
      setZero();
    }
  }
}