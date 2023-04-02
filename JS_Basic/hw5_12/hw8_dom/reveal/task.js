const reveal = Array.from(document.querySelectorAll('.reveal'));

function isVisible (elTop, elBottom) {
  return !(elBottom < 0 || elTop > window.innerHeight);
}

document.addEventListener('scroll', () => {
  reveal.forEach(elm => {
    const { top, bottom } = elm.getBoundingClientRect();
    console.log(top, bottom)
    isVisible(top, bottom) ? elm.classList.add('reveal_active') : elm.classList.remove('reveal_active');
    // if (isVisible(top, bottom) || !isVisible(top, bottom))  {
    //   elm.classList.toggle('reveal_active')
    // }
  })
})

