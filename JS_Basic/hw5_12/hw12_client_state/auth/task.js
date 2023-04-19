const signForm = document.getElementById('signin__form');
const signin = document.querySelector('.signin');
const welcome = document.querySelector('.welcome');
const btnSignIn = document.getElementById('signin__btn');
const btnSignOut = document.getElementById('signout__btn')
const controls = Array.from(document.querySelectorAll('.control'));
const myStorage = window.localStorage;


function doWelcome(userId) {
  welcome.firstElementChild.textContent = userId;
  welcome.classList.add("welcome_active");
  signin.classList.remove('signin_active');
}


if (myStorage.user) {
  doWelcome(myStorage.user)
}


btnSignIn.addEventListener('click', (e) => {
  e.preventDefault();

  if (!controls[0].value || !controls[1].value) {
    alert('Вы не ввели логин или пароль');
    return
  }

  const formData = new FormData(signForm);
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

  xhr.addEventListener('load', () => {
    let response = xhr.response;

    if (response.success) {
      doWelcome(response.user_id)
      myStorage.setItem('user', JSON.stringify(response.user_id));
    } else {
      alert('Неверный логин или пароль');
      signForm.reset();
    }
  })
  xhr.send(formData);
});

btnSignOut.addEventListener('click', (e) => {
  e.preventDefault();
  welcome.classList.remove("welcome_active");
  signin.classList.add('signin_active');
  myStorage.removeItem('user')
});