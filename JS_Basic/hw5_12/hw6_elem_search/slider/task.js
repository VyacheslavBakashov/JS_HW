const sliderItems = Array.from(document.querySelectorAll('.slider__item'));
const leftArrow = document.querySelector('.slider__arrow_prev');
const rightArrow = document.querySelector('.slider__arrow_next');
const pointItems = Array.from(document.querySelectorAll('.slider__dot'))
const lenArray = sliderItems.length;

function activeSlideIndex() {
  return sliderItems.findIndex(item => item.classList.contains('slider__item_active'))
}

function changeActive(index) {
  sliderItems[index].classList.toggle('slider__item_active');
  pointItems[index].classList.toggle('slider__dot_active');
}

function changeSlideByPoint(index) {
  changeActive(activeSlideIndex());
  changeActive(index);
}

function changeSlide(index, len, arrow) {
  let indexForChange = (arrow.classList.contains('slider__arrow_next')) ? (index + 1) % len : (index - 1 + len) % len;
  changeActive(index);
  changeActive(indexForChange);
}

leftArrow.onclick = () => {
  changeSlide(activeSlideIndex(), lenArray, leftArrow);
}

rightArrow.onclick = () => {
  changeSlide(activeSlideIndex(), lenArray, rightArrow);
}

for (let i = 0; i < lenArray; i++) {
  pointItems[i].onclick = () => {
    changeSlideByPoint(i);
  }
}
