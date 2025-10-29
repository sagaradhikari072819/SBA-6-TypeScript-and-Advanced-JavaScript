// Create a calculateTax() function to handle tax calculations for products.
// This function should return the dollar amount that a product is taxed at.

// import Product from "../models/Product";
const TAX_RATE = 4.74;
const GroceryTax = 3;

export function calculateTax(price: number, category: string) {
  if (category !== "groceries") {
    return price * (TAX_RATE / 100);
  } else {
    return price * (GroceryTax / 100);
  }
}
