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
  products: Product[] =[
    {
      id: '1',
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 100,
      categoryId: 'A',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 4
    },
    {
      id: '2',
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 200,
      categoryId: 'B',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 5
    },
    {
      id: '3',
      name: 'Product 3',
      description: 'Description of Product 3',
      price: 150,
      categoryId: 'C',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 3
    },
    {
      id: '4',
      name: 'Product 4',
      description: 'Description of Product 4',
      price: 75,
      categoryId: 'A',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 4
    },
    {
      id: '5',
      name: 'Product 5',
      description: 'Description of Product 5',
      price: 300,
      categoryId: 'B',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 5
    },
    {
      id: '6',
      name: 'Product 6',
      description: 'Description of Product 6',
      price: 220,
      categoryId: 'A',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 4
    },
    {
      id: '7',
      name: 'Product 7',
      description: 'Description of Product 7',
      price: 180,
      categoryId: 'C',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 3
    },
    {
      id: '8',
      name: 'Product 8',
      description: 'Description of Product 8',
      price: 500,
      categoryId: 'B',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 5
    },
    {
      id: '9',
      name: 'Product 9',
      description: 'Description of Product 9',
      price: 120,
      categoryId: 'C',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 4
    },
    {
      id: '10',
      name: 'Product 10',
      description: 'Description of Product 10',
      price: 95,
      categoryId: 'A',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 3
    },
    {
      id: '11',
      name: 'Product 11',
      description: 'Description of Product 11',
      price: 450,
      categoryId: 'B',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 5
    },
    {
      id: '12',
      name: 'Product 12',
      description: 'Description of Product 12',
      price: 130,
      categoryId: 'C',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 4
    },
    {
      id: '13',
      name: 'Product 13',
      description: 'Description of Product 13',
      price: 110,
      categoryId: 'A',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 5
    },
    {
      id: '14',
      name: 'Product 14',
      description: 'Description of Product 14',
      price: 250,
      categoryId: 'B',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 4
    },
    {
      id: '15',
      name: 'Product 15',
      description: 'Description of Product 15',
      price: 320,
      categoryId: 'A',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 5
    }
  ]
 
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
