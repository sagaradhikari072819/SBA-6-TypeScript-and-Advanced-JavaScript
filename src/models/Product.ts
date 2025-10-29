//Define a Product class that includes the appropriate properties based on data provided in the API response.
export default class Product {
  id: number;
  title: string;
  category: string;
  price: number;
  discountPercentage: number;

  constructor(
    id: number,
    title: string,
    category: string,
    price: number,
    discountPercentage: number
  ) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.price = price;
    this.discountPercentage = discountPercentage;
  }

  //Include methods displayDetails() and getPriceWithDiscount(), and implement them appropriately based on the provided data.
  displayDetails(): string {
    return `ID: ${this.id} Title: ${this.title} Category: ${this.category} Price: ${this.price} Discount Percentage: ${this.discountPercentage}`;
  }

  getPriceWithDiscount(): number {
    //return this.price - ((this.discountPercentage * this.price)/100)

    return (this.discountPercentage * this.price) / 100;
  }
}
