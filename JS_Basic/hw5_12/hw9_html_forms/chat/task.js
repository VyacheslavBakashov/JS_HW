const chatBadge= document.querySelector('.chat-widget__side');
const chat = document.querySelector('.chat-widget');
const input = document.querySelector('#chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
const chatWindow = document.querySelector('.chat-widget__messages-container');
const answers = ['Привет', 'Hello', 'Здравствуйте'];

chatBadge.addEventListener('click', () => {
  chat.classList.toggle('chat-widget_active')
});

input.addEventListener('change', () => {
  let time = new Date().toLocaleTimeString();

  messages.innerHTML += `
    <div class="message message_client">
      <div class="message__time">
        ${time}
      </div>
      <div class="message__text">
        ${input.value}
     </div>
    </div>
  `;

  setTimeout(() => {
    let timeAnswer = new Date().toLocaleTimeString()
    messages.innerHTML += `
      <div class="message">
        <div class="message__time">
          ${timeAnswer}
        </div>
        <div class="message__text">
          ${answers[Math.floor(Math.random() * answers.length)]}
        </div>
      </div>
    `;
    chatWindow.scrollBy(0, chatWindow.getBoundingClientRect().bottom);
  }, 1000)

  input.value = '';
  chatWindow.scrollBy(0, chatWindow.getBoundingClientRect().bottom);

});


// const events = Array.from(['focus', 'blur', 'change'])
//
// function botAnswer(message) {
//   let time = new Date().toLocaleTimeString();
//    messages.innerHTML += `
//     <div class="message">
//       <div class="message__time">
//         ${time}
//       </div>
//       <div class="message__text">
//         ${message}
//       </div>
//     </div>
//   `;
//   chatWindow.scrollBy(0, chatWindow.getBoundingClientRect().bottom);
// }
//
// events.forEach(function(event) {
//   input.addEventListener(event, () => {
//     let time = new Date().toLocaleTimeString();
//     let botMessage;
//     let timeoutId = setTimeout(() => {
//
//       botMessage = 'Что-то вы задумались... Я могу вам чем-то помочь?';
//       botAnswer(botMessage)
//     }, 10000)
//     if (['change'].includes(event)) {
//       botMessage = answers[Math.floor(Math.random() * answers.length)];
//       messages.innerHTML += `
//         <div class="message message_client">
//           <div class="message__time">
//             ${time}
//           </div>
//           <div class="message__text">
//             ${input.value}
//          </div>
//         </div>
//       `;
//       chatWindow.scrollBy(0, chatWindow.getBoundingClientRect().bottom);
//       input.value = '';
//       botAnswer(botMessage);
//       clearTimeout(timeoutId);
//     }
//   })
// })

