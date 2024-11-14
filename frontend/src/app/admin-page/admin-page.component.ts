import { Component } from '@angular/core';
import { TopNavbarComponent } from "../top-navbar/top-navbar.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [TopNavbarComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {
  addItem!: FormGroup;
  updateItem!: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {}

  ngOnInit(): void {
    this.addItem = this.fb.group({
      productName: ['', Validators.required],
      description: ['', Validators.required],
      price: [
        '',
        [
          Validators.required,
          Validators.min(0), // Ensures the price is non-negative
        ],
      ],
      categoryName: ['', Validators.required],
      brand: ['', Validators.required],
      imageUrl: [
        '',
        [
          Validators.required,
          Validators.pattern(/\.(jpg|png)$/i), // Ensures the URL ends with .jpg or .png
        ],
      ],
      rating: [
        '',
        [
          Validators.required,
          Validators.min(0),
          Validators.max(5), // Rating between 0 and 5
        ],
      ],
    });

    this.updateItem = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [null, [Validators.required, Validators.min(0)]],
      categoryId: ['', [Validators.required]],
      imageUrl: ['', [Validators.required, Validators.pattern('(https?://.*.(?:png|jpg))')]]
    });
  }

  onSubmit(): void {
    if (this.addItem.valid) {
      console.log('Form Submitted', this.addItem.value);
      this.productService.createExpense(this.addItem.value).subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      )
    }

    if (this.updateItem.valid) {
      console.log('Form Submitted', this.updateItem.value);
    }
  }

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
