// 4. Error Handling Utility:

// Error Handler Module (errorHandler.ts):
// Implement a custom error class and functions to handle different types of errors gracefully.

// Planning:
// 1. Implement a custom error class
// 2. functions to handle different types of errors gracefully

// Actions
// 1. Create your own error class that extends JavaScript's built-in Error class.
// 2. Create functions that handles specific errors
// 3. Use it to throw errors in your apiService function
import Product from "../models/Product";

export class APIError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export function handleAPIError(error: APIError) {
  if (error instanceof APIError) {
    console.error(
      "API Error:",
      error.message,
      "Status Code:",
      error.statusCode
    );
  } else {
    console.error("An unexpected error occurred:", error);
  }
}

// Now repeat the same for a new custom error class
// 1. Create a new ValidationError class
// 2. Create a new function that handles Validation errors
// 3. Use it to throw errors in your discountCalculator and calculateTax utils functions

export class ValidationError extends Error {
  name: string;
  constructor(massage: string) {
    super(massage);
    this.name = "ValidationError";
  }
}
//let's see how tax and discount be handeled
export function processOrder(product: Product) {
  if (product.discountPercentage < 0) {
    throw new ValidationError("Discount can not be negative");
  }
  console.log("Discount is applied");
}
