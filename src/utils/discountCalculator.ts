import Product from "../models/Product";
import { ValidationError, validationHandler } from "./errorHandler";


export function calculateDiscount(product: Product){
    try {
        // use custom error handling to check valid discount
         if (product.price < 0) {
      throw new ValidationError("Product price cannot be negative.");
    }

    if (product.discountPercentage < 0 || product.discountPercentage > 100) {
      throw new ValidationError("Discount percentage must be between 0 and 100.");
    }
     return product.getPriceWithDiscount();
    } catch (error) {
        validationHandler(error as ValidationError);
        return 0; //Fall back
    }
   
}

