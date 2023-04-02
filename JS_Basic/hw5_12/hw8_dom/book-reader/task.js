const bookClass = document.querySelector('.book')
const bookControlFonts = Array.from(document.querySelectorAll('.font-size'))
const pattern_font = /book_fs-\w+/i

function regExp(elm, pattern) {
  return elm.className.match(pattern)
}

function onClick(e) {
  e.preventDefault()
  let cur = e.target;
  let activeFont = document.querySelector('.font-size_active');
  let dataSize = cur.getAttribute('data-size');
  let clsBook = regExp(bookClass, pattern_font);

  dataSize ? bookClass.classList.add(`book_fs-${dataSize}`) : undefined
  clsBook ? bookClass.classList.remove(clsBook[0]) : undefined

  activeFont.classList.toggle('font-size_active');
  cur.classList.toggle('font-size_active');
}

bookControlFonts.forEach(elm => {
  elm.addEventListener('click', onClick)
})

