//exporting module

const shoppingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

export const totalPrice = 237;
export const totalQuantity = 23;

export default {
  shoppingCost,
};
