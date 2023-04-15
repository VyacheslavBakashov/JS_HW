const formSendFile = document.getElementById('form');
const progress = document.getElementById('progress');

formSendFile.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(formSendFile);
  const xhr = new XMLHttpRequest();

  xhr.upload.addEventListener('progress', (e) => {
    const value = e.loaded / e.total;
    progress.value = e.loaded / e.total;
  });

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  xhr.send(formData);
});