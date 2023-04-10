const tooltipElements = Array.from(document.querySelectorAll('.has-tooltip'))

function createTip(elm) {
  elm.insertAdjacentHTML('afterend', `<div class="tooltip" data-position="top">${elm.title}</div>`);
  elm.nextElementSibling.style.position = 'absolute';
}

function activateTip(event) {
  event.preventDefault();
  let current = event.currentTarget;
  let curTip = current.nextElementSibling

  if (['top', ''].includes(curTip.dataset.position)) {
    curTip.style.left = `${current.getBoundingClientRect().left}px`;
    curTip.style.top = `${current.offsetTop - current.getBoundingClientRect().height}px`;
  } else if (curTip.dataset.position === 'bottom') {
    curTip.style.left = `${current.getBoundingClientRect().left}px`;
  } else if (curTip.dataset.position === 'right') {
      curTip.style.left = `${current.getBoundingClientRect().left + current.offsetWidth}px`;
      curTip.style.top = `${current.offsetTop}px`;
  }

  tooltipElements.map(elm => {
    let elmClassList = elm.nextElementSibling.classList;

    if (current === elm) {
      current.nextElementSibling.classList.toggle('tooltip_active');
    } else if (elmClassList.contains('tooltip_active')) {
      elmClassList.remove('tooltip_active');
    }

  });
}

tooltipElements.forEach(createTip);
tooltipElements.forEach(elm => elm.addEventListener('click', activateTip));