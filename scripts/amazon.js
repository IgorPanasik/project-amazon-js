//Products in Array, Information about product in object
const products = [
  {
    //First product in object
    image: "images/products/athletic-cotton-socks-6-pairs.jpg", // Image first prodoct
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs", // Name first product
    rating: {
      // In object rating becouse these two values are related to each other.
      stars: 4.5, // Count stars,
      count: 87, // Count number of voters
    },
    priceCents: 1090, // Price in cents 1$ = 100 cents, becouse js has problems with float numbers or decimal number
    //END First product in object
  },
  // Second product in object
  {
    image: "images/products/intermediate-composite-basketball.jpg", // Image second prodoct
    name: "Intermediate Size Basketball", // Name second product
    rating: {
      // In object rating becouse these two values are related to each other.
      stars: 4, // Count stars,
      count: 127, // Count number of voters
    },

    priceCents: 2095, // Price in cents 1$ = 100 cents, becouse js has problems with float numbers or decimal number
    // END Second product in object
  },
  //Third product in object
  {
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56,
    },
    priceCents: 799,
  },
  // END Third product in object
];

//We want all of our objects to have the same structure so that our code can handle each product the same.

// Generation HTML code through method forEach for array.

let productsHTML = "";

products.forEach((product) => {
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
                          product.rating.stars * 10
                        }.png"
                      />
                      <div class="product-rating-count link-primary">${
                        product.rating.count
                      }</div>
                    </div>

                    <div class="product-price">$${(
                      product.priceCents / 100
                    ).toFixed(2)}</div>

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

                    <button class="add-to-cart-button button-primary">Add to Cart</button>
                  </div>
                `;
});

document.querySelector(".js-products-grid").innerHTML = productsHTML;
