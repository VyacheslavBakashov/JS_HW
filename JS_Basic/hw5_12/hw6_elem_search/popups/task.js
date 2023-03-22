const modalMain = document.querySelector('#modal_main');
const modalClose = document.querySelectorAll('.modal__close');
const modalSuccess = document.querySelector('#modal_success');
const showSuccess = document.querySelector('.show-success');

modalMain.classList.add('modal_active');

modalClose.forEach(elm => {
  elm.onclick = function () {
    this.closest('.modal_active').classList.remove('modal_active');
  }
})

showSuccess.onclick = () => {
  modalMain.classList.remove('modal_active');
  modalSuccess.classList.add('modal_active');
}
