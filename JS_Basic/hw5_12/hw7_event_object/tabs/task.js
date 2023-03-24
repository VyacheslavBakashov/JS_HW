const tabs = Array.from(document.querySelectorAll('.tab'))
const tabContents = Array.from(document.querySelectorAll('.tab__content'))

function show(event) {
  let current = event.currentTarget
  let activeTab = document.querySelector('.tab_active');

  activeTab.classList.remove('tab_active');
  current.classList.add('tab_active');
  tabContents[tabs.indexOf(activeTab)].classList.remove('tab__content_active');
  tabContents[tabs.indexOf(current)].classList.add('tab__content_active');
}

function registerEvent(elmArray) {
  elmArray.forEach(elm => elm.addEventListener('click', show))
}

registerEvent(tabs)

// tabs.forEach(elm => elm.addEventListener('click', show))

// for (let tab of tabs) {
//   tab.addEventListener('click', show)
// }
