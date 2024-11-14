import { Component } from '@angular/core';
import { TopNavbarComponent } from "../top-navbar/top-navbar.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addItem = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [null, [Validators.required, Validators.min(0)]],
      categoryId: ['', [Validators.required]],
      imageUrl: ['', [Validators.required, Validators.pattern('(https?://.*.(?:png|jpg))')]]
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
    }

    if (this.updateItem.valid) {
      console.log('Form Submitted', this.updateItem.value);
    }
  }
}
