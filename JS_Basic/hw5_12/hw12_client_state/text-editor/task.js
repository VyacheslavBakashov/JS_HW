let textArea = document.getElementById('editor');
const myStorage = window.localStorage;
const buttonClear = document.querySelector('.button-clear');

textArea.value = myStorage.getItem('text');

textArea.addEventListener('input', (event) => {
  myStorage.setItem('text', event.target.value);
});

buttonClear.addEventListener('click', () => {
  textArea.value = '';
  myStorage.removeItem('text');
});

