addEventListener('change', (e) => {
  let target = e.target
  if (target.classList.contains('interest__check')) {
    let interest = target.closest('.interest');
    let interests = interest.querySelector('.interests')

    if (interests) {
      let interestArray = interests.querySelectorAll('input[type=checkbox]');
      Array.from(interestArray).forEach(elm => elm.checked = target.checked)
    }
  }
})

