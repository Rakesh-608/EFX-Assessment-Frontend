import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOption } from '@angular/material/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [
    MatCheckboxModule,
    MatRadioModule,
    MatSliderModule,
    CommonModule,
    FormsModule,
    MatOption,
    MatLabel,
    MatFormField,
  ],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.css',
})
export class SideNavbarComponent {
  brands = ['Brand A', 'Brand B', 'Brand C', 'Brand D'];
  ratings = [1, 2, 3, 4, 5];
  categories = ['Electronics', 'Clothing', 'Home Appliances', 'Books'];

  // Object to track which dropdown is visible
  showDropdowns: { [key: string]: boolean } = {
    brandDropdown: false,
    ratingDropdown: false,
    categoryDropdown: false,
    priceRangeDropdown: false
  };
  

  // Toggle the visibility of a dropdown
  toggleDropdown(dropdown: string): void {
    this.showDropdowns[dropdown] = !this.showDropdowns[dropdown];
  }

  priceRange: number = 500; // Default value for the price range
  minPrice: number = 0;     // Minimum price for the range
  maxPrice: number = 1000;  // Maximum price for the range
  // filteredProducts = [this.products]


  onPriceChange() {
    console.log('Selected Price Range:', this.priceRange);
    this.filterProductsByPrice();
  }

  // Method to filter products based on price range
  filterProductsByPrice() {
    // this.filteredProducts = this.products.filter(product => 
    //   product.price <= this.priceRange
    // );
    console.log("filtered by range")
  }
}