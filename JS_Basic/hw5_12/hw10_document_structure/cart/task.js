const quantityControl = Array.from(document.querySelectorAll('.product__quantity-control'));
const quantityControlInc = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const quantityControlDec = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const cartProducts = document.querySelector('.cart__products');
const addToCartBtns = Array.from(document.querySelectorAll('.product__add'));


function updQuantity(event) {
  let target = event.currentTarget;
  let targetValue;

  if (target.classList.contains('product__quantity-control_inc')) {
    targetValue = target.previousElementSibling;
    targetValue.textContent++;
  } else if (target.classList.contains('product__quantity-control_dec')) {
    targetValue = target.nextElementSibling;
    targetValue.textContent = targetValue.textContent > 1 ? --targetValue.textContent : 1;
  }
}

function addProduct(event) {
  let target = event.currentTarget;
  let targetId = +target.closest('.product').dataset.id;
  let targetTitle = target.closest('.product').firstElementChild.textContent.trim()
  let targetImage = target.closest('.product').querySelector('.product__image').src;
  let quantity = +target.closest('.product').querySelector('.product__quantity-value').textContent;


  let htmlText = `<div class="cart__product" data-id=${targetId}>
                    <img class="cart__product-image" src="${targetImage}" alt="${targetTitle }">
                    <div class="cart__product-count">${quantity}</div>
                  </div>`
  ;

  const cartList = Array.from(document.querySelectorAll('.cart__product'));
  let checkTargetInCart = cartList.find(elm => +elm.dataset.id === targetId);

  if (checkTargetInCart) {
    let productQuantity = checkTargetInCart.querySelector('.cart__product-count');
    productQuantity.textContent = +productQuantity.textContent + quantity;
  } else {
    cartProducts.insertAdjacentHTML('beforeend', htmlText)
  }
}


quantityControl.forEach((elm) => {
  elm.addEventListener('click', updQuantity);
})

addToCartBtns.forEach((elm) => {
  elm.addEventListener('click', addProduct);
})