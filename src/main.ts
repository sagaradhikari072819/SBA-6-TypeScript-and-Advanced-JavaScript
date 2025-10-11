import Product from "./models/Product";
import {calculateTax} from "./utils/taxCalculator.ts";
import { calculateDiscount } from "./utils/discountCalculator.ts";
import {processOrder} from "./utils/errorHandler.ts"

//id: number, title: string, category: string,price:number, discountPercentage: number
const laptop = new Product(999, 'macbook', 'groceries', 110, 5)

const myProducts = [laptop]

for(const product of myProducts){
    console.log('Product ID', product.id);
  console.log('Product Price', product.price);
  console.log('Product Discount', calculateDiscount(product));
  console.log('Product Category', product.category);
  // Polymorphic behavior
    console.log("Tax Amount: $" + calculateTax(product.price, product.category).toFixed(2));
    //Testing custom errors
    console.log('Error displayed for test', processOrder(product));
    //Testing custom API error
    console.log('API ERROR');
}