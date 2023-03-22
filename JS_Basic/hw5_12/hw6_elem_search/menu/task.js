const menuLinks = document.querySelectorAll('.menu__link');

// for (let link of menuLinks) {
//   let subMenu = link.closest('.menu__item').querySelector('.menu_sub');
//
//   if (subMenu) {
//     link.onclick = () => {
//       subMenu.classList.toggle('menu_active');
//       return false
//     }
//   }
// }


for (let link of menuLinks) {
  if (link.nextElementSibling) {
    link.onclick = () => {
      if (link.nextElementSibling.classList.contains('menu_active')) {
        closeSubMenu();
        return false
      }
      closeSubMenu();
      link.nextElementSibling.classList.add('menu_active');
      return false
    }

  }
}

function closeSubMenu() {
  const openSubMenus = document.querySelectorAll('.menu_active');
  for (let sub of openSubMenus) {
    sub.classList.remove('menu_active')
  }
}