import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './update-page.component.html',
  styleUrl: './update-page.component.css'
})
export class UpdatePageComponent {

  products: Product[] = [];
  selectedProduct: Product | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

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

  editProduct(product: Product): void {
    this.selectedProduct = { ...product }; // Create a copy to avoid direct modification
  }

  updateProduct(): void {
    if (this.selectedProduct) {
      this.productService.updateAProduct(this.selectedProduct).subscribe(
        () => {
          alert('Product updated successfully.');
          this.fetchProducts();
          this.selectedProduct = null;
        },
        (error) => {
          console.error('Error updating product:', error);
        }
      );
    }
  }

  cancelEdit(): void {
    this.selectedProduct = null; // Close the form without saving changes
  }

}
