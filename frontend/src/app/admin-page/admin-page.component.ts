import { Component } from '@angular/core';
import { TopNavbarComponent } from "../top-navbar/top-navbar.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ProductService } from '../product.service';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [TopNavbarComponent, ReactiveFormsModule, CommonModule, MatIconModule, RouterLink],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {
  addItem!: FormGroup;
  updateItem!: FormGroup;
  updatedProduct: Product | undefined;
  deleteForm!: FormGroup;

  addproductFormDropdown= false;
  updateProductFormDropdown= false;
  deleteProductFormDropdown= false;

  openAddProductForm(){
    this.router.navigate(['../add-product-form']);
  }


  openUpdateProductForm(){
    this.router.navigate(['../update-product']);
  }


  openDeleteForm(){
    this.router.navigate(['../delete-product-form']);
  }

  showAddProductForm(){
    this.addproductFormDropdown=!this.addproductFormDropdown;
    this.router.navigate(['/add-product-form']);
  }

  showUpdateProduct(){
    this.updateProductFormDropdown=!this.updateProductFormDropdown;
  }

  showDeleteProduct(){
    this.deleteProductFormDropdown=!this.deleteProductFormDropdown;
  }

  constructor(private fb: FormBuilder, private productService: ProductService, private router:Router) {}

  ngOnInit(): void {
    this.addItem = this.fb.group({
      productName: ['', Validators.required],
      description: ['', Validators.required],
      price: [
        '',
        [
          Validators.required,
          Validators.min(0),
        ],
      ],
      categoryName: ['', Validators.required],
      brand: ['', Validators.required],
      imageUrl: [
        '',
        [
          Validators.required,
          Validators.pattern(/\.(jpg|png|jpeg)$/i),
        ],
      ],
      rating: [
        '',
        [
          Validators.required,
          Validators.min(0),
          Validators.max(5),
        ],
      ],
    });

    this.updateItem = this.fb.group({
      id: ['', Validators.required],
      productName: ['', Validators.required],
      description: ['', Validators.required],
      price: [
        '',
        [
          Validators.required,
          Validators.min(0),
        ],
      ],
      categoryName: ['', Validators.required],
      brand: ['', Validators.required],
      imageUrl: [
        '',
        [
          Validators.required,
          Validators.pattern(/\.(jpg|png|jpeg)$/i),
        ],
      ],
      rating: [
        '',
        [
          Validators.required,
          Validators.min(0),
          Validators.max(5),
        ],
      ],
    });

    this.deleteForm = this.fb.group({
      id: ['', [Validators.required, Validators.pattern(/^\S+$/)]]
    });

  }

  onSubmit(): void {
    if (this.addItem.valid) {
      console.log('Form Submitted', this.addItem.value);
      this.productService.addItem(this.addItem.value).subscribe(
        (data) => console.log("Fetched data", data),
        (error) => console.log(error)
      )
    }

    if (this.updateItem.valid) {
      console.log('Form Submitted', this.updateItem.value);
      const productId = this.updateItem.value.id;
      this.productService.updateProduct(productId, this.updateItem.value).subscribe(
        (updatedProduct) => {
          console.log('Product updated:', updatedProduct);
        },
        (error) => {
          console.error('Error updating product:', error);
        }
      );
    }

    if (this.deleteForm.valid) {
      const id = this.deleteForm.value.id;
      console.log('Deleting item with ID:', id);
      this.productService.deleteProductById(this.deleteForm.value.id).subscribe(
        (updatedProduct) => {
          console.log('Product updated:', updatedProduct);
        },
        (error) => {
          console.error('Error updating product:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }


  onDelete(): void {
    if (this.deleteForm.valid) {
      const id = this.deleteForm.value.id;
      console.log('Deleting item with ID:', id);
    } else {
      console.log('Form is invalid');
    }
  }
  


  
  selectedProductId: string | null = null;

  onSelectProduct(productId: string): void {
    this.selectedProductId = productId === this.selectedProductId ? null : productId;
  }

  isProductSelected(productId: string): boolean {
    return this.selectedProductId === productId;
  }
}
