let xhr = new XMLHttpRequest();
let items = document.getElementById('items');
let loader = document.getElementById('loader');

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE && xhr.status === 200) {
    loader.classList.remove('loader_active');
    let data = xhr.response.response.Valute;

    for (let currency in data) {
      let htmlText = `<div class="item">
                        <div class="item__code">${data[currency].CharCode}</div>
                        <div class="item__value">${data[currency].Value}</div>
                        <div class="item__currency">руб.</div>
                       </div>`;
      items.insertAdjacentHTML('beforeend', htmlText);
    }
  }
});

xhr.send();