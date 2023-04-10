const tasksInput = document.querySelector('.tasks__input');
const tasksAdd = document.querySelector('.tasks__add');
const tasksList = document.querySelector('.tasks__list');
const myStorage = window.localStorage;
let i = 0;


function createTask(taskText, num) {

  let htmlText = `<div class="task" data-number=${num}>
                    <div class="task__title">
                      ${taskText}
                    </div>
                    <a href="#" class="task__remove">&times;</a>
                  </div>`
  ;

  tasksList.insertAdjacentHTML('beforeend', htmlText);
  const addedTask = tasksList.lastElementChild;
  const addedTaskRmv = addedTask.querySelector('.task__remove');

  addedTaskRmv.addEventListener('click', (event) => {
    event.preventDefault();
    const numTask = addedTask.dataset.number;
    addedTask.remove();
    myStorage.removeItem(numTask);
  });
}


function onClickAdd(event) {
  event.preventDefault();
  let taskText = tasksInput.value.trim();

  if (!taskText) { return }

  const keysStorage = Array.from(Object.keys(myStorage));

  if (keysStorage.length) {
    i = Math.max(...keysStorage.map(Number));
  }

  i++;
  createTask(taskText, i);
  myStorage[`${i}`] = taskText;
  tasksInput.value = '';
}


function preload() {
  const keysStorage = Array.from(Object.keys(myStorage));
  keysStorage.sort((num1, num2) => Number(num1) - Number(num2));

  if (keysStorage.length) {
    for (let key of keysStorage) {
      createTask(myStorage.getItem(key), +key)
    }
  }
}


window.addEventListener('load', preload);
tasksAdd.addEventListener('click', onClickAdd);
