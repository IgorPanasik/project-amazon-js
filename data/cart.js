// Export variable for access in other files
export let cart = JSON.parse(localStorage.getItem("cart"));
if (!cart) {
  cart = [
    ({
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
    },
    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
    }),
  ];
}

function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId) {
  let matchingItem; // Variable for save corresponding producta with unique Id

  // Product matching check
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  //Add select quantity products
  const selectQuantity = document.querySelector(
    `.js-quantity-selector-${productId}` // Use `` template strings!!!!
  );

  const quantity = Number(selectQuantity.value); // Covert value from string to number(default string)

  // if the product is already in the cart calculete quantity else add product in cart
  if (matchingItem) {
    matchingItem.quantity += quantity; //insead += 1 , add anything from select
  } else {
    cart.push({
      //productId: productId,
      //quantity: quantity,
      //Shortcat destructuring
      productId,
      quantity,
    });
  }

  saveToStorage();
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
  saveToStorage();
}

export function calculeteCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  return cartQuantity;
}

export function updateQuantity(productId, newQuantuty) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.quantity = newQuantuty;

  saveToStorage();
}
