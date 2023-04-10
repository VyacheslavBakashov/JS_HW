const chatBadge= document.querySelector('.chat-widget__side');
const chat = document.querySelector('.chat-widget');
const input = document.querySelector('#chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
const chatWindow = document.querySelector('.chat-widget__messages-container');
const answers = ['Привет', 'Hello', 'Здравствуйте'];
let timeoutId;

chatBadge.addEventListener('click', () => {
  chat.classList.toggle('chat-widget_active')
});


function sendMessage(message, fromClient=false) {
  let time = new Date().toLocaleTimeString();
  let classClient =  (fromClient) ? ' message_client' : '';

   messages.innerHTML += `
    <div class="message${classClient}">
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
  clearTimeout(timeoutId);
  let botMessage;
  let time = new Date().toLocaleTimeString();

  if (!input.value.trim()) { return }

  sendMessage(input.value, true);
  chatWindow.scrollBy(0, chatWindow.getBoundingClientRect().bottom);
  input.value = '';

  setTimeout(() => {
    botMessage = answers[Math.floor(Math.random() * answers.length)];
    sendMessage(botMessage)
  }, 800);

  timeoutId = setTimeout(() => {
    botMessage = 'Что-то вы задумались... Я могу вам чем-то помочь?';
    sendMessage(botMessage)
  }, 30000);
})


