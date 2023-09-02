//We want to take all of our objects to have the same structure so that our code can handle each product the same.  from 'products.js'

// Generation HTML code through method forEach for array.

// Variable for one string all code
let productsHTML = "";

// Loop through the array and store each product in the array as a variable "product"
products.forEach((product) => {
  // Add from object property and corresponding value
  productsHTML += `
                  <div class="product-container">
                    <div class="product-image-container">
                      <img
                        class="product-image"
                        src="${product.image}"
                      />
                    </div>

                    <div class="product-name limit-text-to-2-lines">
                      ${product.name}
                    </div>

                    <div class="product-rating-container">
                      <img
                        class="product-rating-stars"
                        src="images/ratings/rating-${
                          // In source name image for stars rating-40 , in object 4 * 10 = 40;
                          product.rating.stars * 10
                        }.png"
                      />
                      <div class="product-rating-count link-primary">${
                        product.rating.count
                      }</div>
                    </div>

                    <div class="product-price">$${
                      // convert from cents to dollars 1$ = 100cents, after the decimal point 2 digits
                      (product.priceCents / 100).toFixed(2)
                    }</div> 

                    <div class="product-quantity-container">
                      <select class="js-quantity-selector-${product.id}">
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </div>

                    <div class="product-spacer"></div>

                    <div class="added-to-cart js-added-message-${product.id}">
                      <img src="images/icons/checkmark.png" />
                      Added
                    </div>

                    <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${
                      product.id //Add atributte for more info about ptoduct(in case unique ID)
                    }">Add to Cart</button>
                  </div>
                `;
});

document.querySelector(".js-products-grid").innerHTML = productsHTML; // concatenate code with one string and add he's in container in html file

// Find to add to cart all buttons through DOM than we can loop through each of the buttons.

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    //const productId = button.dataset.productId; // Save to product Id in variable
    //Shortcat destructuring
    const { productId } = button.dataset;
    let matchingItem; // Variable for save corresponding producta with unique Id

    // Product matching check
    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
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

    // Calculate total quantity products in cart

    let cartQuantity = 0;

    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });

    // We're going to use an object to save the timeout ids.
    // The reason we use an object is because each product
    // will have its own timeoutId. So an object lets us
    // save multiple timeout ids for different products.
    //const addedMessageTimeouts = {};

    // This solution uses a feature of JavaScript called a
    // closure. Each time we run the loop, it will create
    // a new variable called addedMessageTimeoutId and do
    // button.addEventListener().
    //
    // Then, because of closure, the function we give to
    // button.addEventListener() will get a unique copy
    // of the addedMessageTimeoutId variable and it will
    // keep this copy of the variable forever.
    // (Reminder: closure = if a function has access to a
    // value/variable, it will always have access to that
    // value/variable).
    //
    // This allows us to create many unique copies of the
    // addedMessageTimeoutId variable (one for every time
    // we run the loop) so it lets us keep track of many
    // timeoutIds (one for each product).
    let addedMessageTimeoutId;

    //Add message 'ADDED' first find to selector
    const addedMessage = document.querySelector(
      `.js-added-message-${productId}` // Use `` template strings!!!!
    );

    addedMessage.classList.add("added-to-cart-message");
    // Use setTimeout for removing the class

    setTimeout(() => {
      // Check if there's a previous timeout for this
      // product. If there is, we should stop it.
      //const previousTimeoutId = addedMessageTimeouts[productId];

      if (addedMessageTimeoutId) {
        //previousTimeoutId) {
        clearTimeout(addedMessageTimeoutId); //previousTimeoutId);
      }

      const setTimeoutID = setTimeout(() => {
        addedMessage.classList.remove("added-to-cart-message");
      }, 2000);

      // Save the timeoutId for this product
      // so we can stop it later if we need to.
      //addedMessageTimeouts[productId] = setTimeoutID;
      addedMessageTimeoutId = setTimeoutID;
    });

    // Add carQuantity on the page
    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
  });
});
