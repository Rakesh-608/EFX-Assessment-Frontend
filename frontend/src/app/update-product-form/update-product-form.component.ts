import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update-product-form.component.html',
  styleUrl: './update-product-form.component.css'
})
export class UpdateProductFormComponent {
updateItem!: FormGroup;
router!: Router;

categories=['Electronics','Footwear','Clothing','Kitchenwear', 'Furniture']


constructor(private fb: FormBuilder, private productService:ProductService) {}


ngOnInit(): void {
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

}


onSubmit(): void {
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
}

}
