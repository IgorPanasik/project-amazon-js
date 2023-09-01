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
                      <select>
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

                    <div class="added-to-cart">
                      <img src="images/icons/checkmark.png" />
                      Added
                    </div>

                    <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${
                      product.id
                    }">Add to Cart</button>
                  </div>
                `;
});

document.querySelector(".js-products-grid").innerHTML = productsHTML; // concatenate code with one string and add he's in container in html file

// Find to add to cart all buttons through DOM than we can loop through each of the buttons.

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;

    let matchingItem;

    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId: productId,
        quantity: 1,
      });
    }

    console.log(cart);
  });
});
