import Product from "./models/Product";
import { getProducts } from "./services/apiService";
import { calculateDiscount } from "./utils/discountCalculator";
import { handleAPIError, ValidationError, validationHandler } from "./utils/errorHandler";
import { calculateTax } from "./utils/taxCalculator";


async function productManagement() {
    try {
        console.log("Product Data from the API");

        const myProducts = await getProducts(10);

        //for debug
       // console.log('My product', myProducts);
        
       //loop to each product
       for(const productTemp of myProducts){
        const oneProduct = new Product(productTemp.id, productTemp.price, productTemp.discountPercentage, productTemp.category); 
        try {
             // validate
         if (oneProduct.discountPercentage < 0) {
          throw new ValidationError("Invalid discount percentage!");
        }
         

            const discountedAmount = calculateDiscount(oneProduct);
          
            
            const tax = calculateTax(oneProduct.price, oneProduct.category);
           
            
            const finalPrice = oneProduct.price - (discountedAmount + tax);

            console.log(`Product Id: ${oneProduct.id}`);
            console.log(`Category: ${oneProduct.category}`);
            console.log(`Price: $${oneProduct.price}`);
            console.log(`Discount Amount: ${calculateDiscount(oneProduct)}`);
            console.log(`Tax amount: $${tax.toFixed(2)}`);
            console.log(`Final Price: $${finalPrice.toFixed(2)}`);
        
            
            console.log("--------------------------------------");

        } catch (err) {
             validationHandler(err as ValidationError);
        }
        
        
       }
        
        console.log('All products displayed successfully');
        
    } catch (error) {
        handleAPIError(error as any)
    }
}

productManagement();