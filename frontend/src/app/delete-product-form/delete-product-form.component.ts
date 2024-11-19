import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product-form',
  standalone: true,
  imports: [MatIconModule, CommonModule, ReactiveFormsModule],
  templateUrl: './delete-product-form.component.html',
  styleUrl: './delete-product-form.component.css'
})
export class DeleteProductFormComponent {
  deleteForm!: FormGroup;
  categories=['Electronics','Footwear','Clothing','Kitchenwear', 'Furniture']
  
  constructor(private fb: FormBuilder, private productService:ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  products: Product[] = [];

  fetchProducts(): void {
    this.productService.getAllProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  deleteProduct(productId: string): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProductById(productId).subscribe(
        () => {
          alert('Product deleted successfully.');
          this.products = this.products.filter(product => product.id !== productId);
        },
        (error) => {
          console.error('Error deleting product:', error);
        }
      );
    }
  }
}
