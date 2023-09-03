// Export variable for access in other files
export const cart = [];

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
}
