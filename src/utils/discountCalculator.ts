import Product from "../models/Product";

//Create a calculateDiscount() function to handle discount calculations for products.
export function calculateDiscount(product: Product){
    // if (price < 0 || discountPercentage < 0){
    //     throw new Error("Price and discount Percentage can not be NEGATIVE")
    // }
 //This function should return the dollar amount that a product is discounted by. For example, if a product costs $100 and has a 10% discount, the function should return $10.  
return product.getPriceWithDiscount()//still confused on it...
}