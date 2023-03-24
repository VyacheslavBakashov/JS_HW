const dropLinks = document.querySelectorAll('.dropdown__link');
let valueButton = document.querySelector('.dropdown__value');

function onClick(e) {
  e.target.nextElementSibling.classList.toggle('dropdown__list_active');
}

function onClickItem(e) {
  let value = e.target.closest('.dropdown__list').previousElementSibling;
  e.preventDefault();
  value.textContent = e.target.textContent;
  e.target.closest('.dropdown__list').classList.remove('dropdown__list_active');
}

Array.from(dropLinks).forEach(elm => {
  elm.addEventListener('click', onClickItem);
})

valueButton.addEventListener('click', onClick);