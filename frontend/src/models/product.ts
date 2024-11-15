export class Product {
  id: string;
  productName: string;
  brand: string;
  categoryName: Category;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;

  constructor(
    id: string,
    productName: string,
    brand: string,
    categoryName: Category,
    description: string,
    price: number,
    imageUrl: string,
    rating: number
  ) {
    this.id = id;
    this.productName = productName;
    this.brand = brand;
    this.categoryName = categoryName;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
    this.rating = rating;
  }
}

// Define the Category type if it doesn't already exist.
export type Category = string; // Change this as needed

  