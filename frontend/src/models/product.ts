export class Product {
    id: string;
    name: string;
    description: string;
    price: number;
    categoryId: string;
    imageUrl: string;
    rating: number;
  
    constructor(
      id: string,
      name: string,
      description: string,
      price: number,
      categoryId: string,
      imageUrl: string,
      rating: number
    ) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.categoryId = categoryId;
      this.imageUrl = imageUrl;
      this.rating = rating;
    }
  }
  