import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { FilterProductService } from '../filter-product.service';
import { min } from 'rxjs';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [
    MatCheckboxModule,
    MatSliderModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css'],
})
export class SideNavbarComponent {

  constructor(private filterProductService: FilterProductService) {}
  
  brands = ['Brand A','Brand B','Brand C','Brand D'];
  ratings = [1, 2, 3, 4, 5];
  categories = ['Electronics','Clothing','Home Appliances','Books'];
  prices= [10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000]

  showDropdowns: { [key: string]: boolean } = {
    brandDropdown: false,
    ratingDropdown: false,
    categoryDropdown: false,
    priceDropdown: false,
    priceRangeDropdown: false
  };

  selectedBrands: string[] = [];
  selectedRatings: number[] = [];
  selectedCategories: string[] = [];
  selectedPrices: number[] = []

  toggleDropdown(dropdown: string): void {
    this.showDropdowns[dropdown] = !this.showDropdowns[dropdown];
  }

  getSelectedArray(filterType: 'brand' | 'rating' | 'category' | 'price'): string[] | number[] {
    switch (filterType) {
      case 'brand':
        return this.selectedBrands;
      case 'rating':
        return this.selectedRatings;
      case 'category':
        return this.selectedCategories;
      case 'price':
        return this.selectedPrices;
      default:
        throw new Error(`Unknown filter type: ${filterType}`);
    }
  }

  onCheckboxChange(filterType: 'brand' | 'rating' | 'category' | 'price', value: string | number, checked: boolean): void {
    const selectedArray = this.getSelectedArray(filterType);

    if (checked) {
      (selectedArray as (string | number)[]).push(value);
    } else {
      const index = (selectedArray as (string | number)[]).indexOf(value);
      if (index > -1) {
        (selectedArray as (string | number)[]).splice(index, 1);
      }
    }
    
    console.log(`Selected ${filterType}:`, selectedArray);
  }

 
getMinimumRating(selectedRatings: number[]): number {
  if (selectedRatings.length === 0) {
    return 0;
  }
  const minRating = Math.min(...selectedRatings);
  return minRating;
}

getMinimumPrice(selectedPrices: number[]): number {
  if (this.selectedPrices.length === 0 || this.selectedPrices.length === 1) {
    return 0;
  }
  const minRating = Math.min(...this.selectedPrices);
  return minRating;
}

getMaximumPrice(selectedRatings: number[]): number {
  if (this.selectedPrices.length === 0) {
    return 100000;
  }
  const maxRating = Math.max(...this.selectedPrices);
  return maxRating;
}

getBrands(selectedBrands: string[]): string[] {
  if (this.selectedBrands.length === 0) {
    return this.brands;
  }
  return this.selectedBrands;
}


getCategories(selectedCategories: string[]): string[] {
  if (this.selectedCategories.length === 0) {
    return this.categories;
  }
  return this.selectedCategories;
}


  applyFilter() {
    this.filterProductService.setFilters(
      // this.selectedCategories, 
      this.getCategories(this.selectedCategories),
      this.getBrands(this.selectedBrands),
      this.getMinimumPrice(this.selectedPrices), 
      this.getMaximumPrice(this.selectedPrices), 
      this.getMinimumRating(this.selectedRatings)
    );
    this.filterProductService.getFilteredData();
  }

}
