const xhr = new XMLHttpRequest();
const xhrPost = new XMLHttpRequest;
const pollTitle = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');


function getVoteResults(voteId, answerId) {
  xhrPost.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll' );
  xhrPost.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
  xhrPost.responseType = 'json';
  xhrPost.send( `vote=${voteId}&answer=${answerId}`);

  xhrPost.addEventListener('readystatechange', () => {
    if (xhrPost.readyState === xhrPost.DONE) {
      pollAnswers.classList.remove('poll__answers_active');
      const responsePost = xhrPost.response.stat;
      const totalVotes = (responsePost.map((elm) => elm.votes).reduce((a, b) => a + b));

      for (let item of responsePost) {
        let itemPercent = (100 * item.votes / totalVotes).toFixed(2)
        let htmlText = `<div class="item__percent">
                          ${item.answer}: ${itemPercent}%
                        </div>`;
        pollAnswers.insertAdjacentHTML('afterend', htmlText);
      }
    }
  })
}


function vote() {
  if (xhr.readyState === xhr.DONE && xhr.status === 200) {
    let responseData = xhr.response.data;
    let responseID = xhr.response.id;

    pollTitle.textContent = responseData.title;

    for (let answer of responseData.answers) {
      let htmlText = `<button class="poll__answer">${answer}</button>`;
      pollAnswers.insertAdjacentHTML('beforeend', htmlText);
    }

    pollAnswers.addEventListener('click', (event) => {
      // event.preventDefault();
      const answerId = responseData.answers.indexOf(event.target.textContent)
      alert('Спасибо, ваш голос засчитан!');
      getVoteResults(responseID, answerId);
    })
  }
}

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.addEventListener('readystatechange', vote);
xhr.send();
