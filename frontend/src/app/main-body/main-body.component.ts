import { Component } from '@angular/core';
import { TopNavbarComponent } from "../top-navbar/top-navbar.component";
import { SideNavbarComponent } from "../side-navbar/side-navbar.component";
import { ProductCardComponent } from "../product-card/product-card.component";
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-body',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './main-body.component.html',
  styleUrl: './main-body.component.css'
})
export class MainBodyComponent {
  products: Product[] = [
    {
      id: '1',
      productName: 'Product 1',
      brand: 'Brand A',
      categoryName: 'A',
      description: 'Description of Product 1',
      price: 100,
      imageUrl: 'https://via.placeholder.com/150',
      rating: 4,
    },
    {
      id: '2',
      productName: 'Product 2',
      brand: 'Brand B',
      categoryName: 'B',
      description: 'Description of Product 2',
      price: 200,
      imageUrl: 'https://via.placeholder.com/150',
      rating: 5,
    },
    {
      id: '3',
      productName: 'Product 3',
      brand: 'Brand C',
      categoryName: 'C',
      description: 'Description of Product 3',
      price: 150,
      imageUrl: 'https://via.placeholder.com/150',
      rating: 3,
    },
    {
      id: '4',
      productName: 'Product 4',
      brand: 'Brand A',
      categoryName: 'A',
      description: 'Description of Product 4',
      price: 75,
      imageUrl: 'https://via.placeholder.com/150',
      rating: 4,
    },
    {
      id: '5',
      productName: 'Product 5',
      brand: 'Brand B',
      categoryName: 'B',
      description: 'Description of Product 5',
      price: 300,
      imageUrl: 'https://via.placeholder.com/150',
      rating: 5,
    },
    {
      id: '6',
      productName: 'Product 6',
      brand: 'Brand A',
      categoryName: 'A',
      description: 'Description of Product 6',
      price: 220,
      imageUrl: 'https://via.placeholder.com/150',
      rating: 4,
    },
    {
      id: '7',
      productName: 'Product 7',
      brand: 'Brand C',
      categoryName: 'C',
      description: 'Description of Product 7',
      price: 180,
      imageUrl: 'https://via.placeholder.com/150',
      rating: 3,
    },
    {
      id: '8',
      productName: 'Product 8',
      brand: 'Brand B',
      categoryName: 'B',
      description: 'Description of Product 8',
      price: 500,
      imageUrl: 'https://via.placeholder.com/150',
      rating: 5,
    },
    {
      id: '9',
      productName: 'Product 9',
      brand: 'Brand C',
      categoryName: 'C',
      description: 'Description of Product 9',
      price: 120,
      imageUrl: 'https://via.placeholder.com/150',
      rating: 4,
    },
    {
      id: '10',
      productName: 'Product 10',
      brand: 'Brand A',
      categoryName: 'A',
      description: 'Description of Product 10',
      price: 95,
      imageUrl: 'https://via.placeholder.com/150',
      rating: 3,
    },
    {
      id: '11',
      productName: 'Product 11',
      brand: 'Brand B',
      categoryName: 'B',
      description: 'Description of Product 11',
      price: 450,
      imageUrl: 'https://via.placeholder.com/150',
      rating: 5,
    },
    {
      id: '12',
      productName: 'Product 12',
      brand: 'Brand C',
      categoryName: 'C',
      description: 'Description of Product 12',
      price: 130,
      imageUrl: 'https://via.placeholder.com/150',
      rating: 4,
    },
    {
      id: '13',
      productName: 'Product 13',
      brand: 'Brand A',
      categoryName: 'A',
      description: 'Description of Product 13',
      price: 110,
      imageUrl: 'https://via.placeholder.com/150',
      rating: 5,
    },
    {
      id: '14',
      productName: 'Product 14',
      brand: 'Brand B',
      categoryName: 'B',
      description: 'Description of Product 14',
      price: 250,
      imageUrl: 'https://via.placeholder.com/150',
      rating: 4,
    },
    {
      id: '15',
      productName: 'Product 15',
      brand: 'Brand A',
      categoryName: 'A',
      description: 'Description of Product 15',
      price: 320,
      imageUrl: 'https://via.placeholder.com/150',
      rating: 5,
    },
  ];
 
  selectedProductId: string | null = null;

  // Method to select a product
  onSelectProduct(productId: string): void {
    this.selectedProductId = productId === this.selectedProductId ? null : productId;
  }

  // Check if product is selected
  isProductSelected(productId: string): boolean {
    return this.selectedProductId === productId;
  }
}
