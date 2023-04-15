const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
let modalCookie = getCookie('modal_close');

console.log(getCookie('modal_close'));

function setCookie(name, value) {
  document.cookie = `${name}=${encodeURIComponent(value)}`
}

function getCookie(name) {
  const pairs = document.cookie.split('; ');
  const cookie = pairs.find(elm => elm.startsWith(`${name}=`));
  if (!cookie) {return}
  return cookie.split('=')[1]
}

modalClose.addEventListener('click', (e) => {
  e.preventDefault();
  setCookie('modal_close', true);
  modal.classList.remove('modal_active');
})

if (!modalCookie || modalCookie === 'false') {
  modal.classList.add('modal_active');
}

console.log(document.cookie);

