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

  showDropdowns: { [key: string]: boolean } = {
    brandDropdown: false,
    ratingDropdown: false,
    categoryDropdown: false,
    priceRangeDropdown: false
  };

  selectedBrands: string[] = [];
  selectedRatings: number[] = [];
  selectedCategories: string[] = [];

  priceRange: number = 500;
  minPrice: number = 0; 
  maxPrice: number = 100000;

  toggleDropdown(dropdown: string): void {
    this.showDropdowns[dropdown] = !this.showDropdowns[dropdown];
  }

  getSelectedArray(filterType: 'brand' | 'rating' | 'category'): string[] | number[] {
    switch (filterType) {
      case 'brand':
        return this.selectedBrands;
      case 'rating':
        return this.selectedRatings;
      case 'category':
        return this.selectedCategories;
      default:
        throw new Error(`Unknown filter type: ${filterType}`);
    }
  }

  onCheckboxChange(filterType: 'brand' | 'rating' | 'category', value: string | number, checked: boolean): void {
    const selectedArray = this.getSelectedArray(filterType);

    if (checked) {
      selectedArray.push(value as never);
    } else {
      const index = selectedArray.indexOf(value as never);
      if (index > -1) {
        selectedArray.splice(index, 1);
      }
    }

    console.log(`Selected ${filterType}:`, selectedArray);
  }

  onPriceChange(): void {
    console.log('Selected Price Range:', this.priceRange);
    this.filterProductsByPrice();
  }

  filterProductsByPrice() {
    console.log("Filtered products by price range");
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return `${value}`;
  }
}