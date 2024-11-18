import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-add-product-form',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule, ReactiveFormsModule],
  templateUrl: './add-product-form.component.html',
  styleUrl: './add-product-form.component.css'
})
export class AddProductFormComponent {

  addItem!: FormGroup;
  categories=['Electronics','Footwear','Clothing','Kitchenwear', 'Furniture']
  
  constructor(private fb: FormBuilder, private productService:ProductService) {}

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

  }


  onSubmit(): void {
    if (this.addItem.valid) {
      console.log('Form Submitted', this.addItem.value);
      this.productService.addItem(this.addItem.value).subscribe(
        (data) => console.log("Fetched data", data),
        (error) => console.log(error)
      )
    }
  }


}
