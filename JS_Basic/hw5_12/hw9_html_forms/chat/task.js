const chatBadge= document.querySelector('.chat-widget__side');
const chat = document.querySelector('.chat-widget');
const input = document.querySelector('#chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
const chatWindow = document.querySelector('.chat-widget__messages-container');
const answers = ['Привет', 'Hello', 'Здравствуйте'];

chatBadge.addEventListener('click', () => {
  chat.classList.toggle('chat-widget_active')
});


// const events = Array.from(['focus', 'blur', 'change'])

function sendMessage(message) {
  let timeoutId;
  let time = new Date().toLocaleTimeString();
  clearTimeout(timeoutId);
   messages.innerHTML += `
    <div class="message">
      <div class="message__time">
        ${time}
      </div>
      <div class="message__text">
        ${message}
      </div>
    </div>`;

  chatWindow.scrollBy(0, chatWindow.getBoundingClientRect().bottom);
}


input.addEventListener('change', () => {
  let botMessage, timeoutId;
  let time = new Date().toLocaleTimeString();

  if (!input.value.trim()) { return }

  messages.innerHTML += `
    <div class="message message_client">
      <div class="message__time">
        ${time}
      </div>
      <div class="message__text">
        ${input.value}
     </div>
    </div>`;

  chatWindow.scrollBy(0, chatWindow.getBoundingClientRect().bottom);
  input.value = '';

  setTimeout(() => {
    botMessage = answers[Math.floor(Math.random() * answers.length)];
    sendMessage(botMessage)
  }, 800);

  // timeoutId = setTimeout(() => {
  //   botMessage = 'Что-то вы задумались... Я могу вам чем-то помочь?';
  //   botAnswer(botMessage)
  // }, 5000);

})


