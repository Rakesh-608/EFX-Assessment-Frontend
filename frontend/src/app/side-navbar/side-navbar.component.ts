// import { CommonModule } from '@angular/common';
// import { Component, NgModule } from '@angular/core';
// import { FormsModule, NgModel } from '@angular/forms';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatOption } from '@angular/material/core';
// import { MatFormField, MatLabel } from '@angular/material/form-field';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatSliderModule } from '@angular/material/slider';

// @Component({
//   selector: 'app-side-navbar',
//   standalone: true,
//   imports: [
//     MatCheckboxModule,
//     MatRadioModule,
//     MatSliderModule,
//     CommonModule,
//     FormsModule,
//     MatOption,
//     MatLabel,
//     MatFormField,
//   ],
//   templateUrl: './side-navbar.component.html',
//   styleUrl: './side-navbar.component.css',
// })
// export class SideNavbarComponent {
//   brands = ['Brand A', 'Brand B', 'Brand C', 'Brand D'];
//   ratings = [1, 2, 3, 4, 5];
//   categories = ['Electronics', 'Clothing', 'Home Appliances', 'Books'];

//   // Object to track which dropdown is visible
//   showDropdowns: { [key: string]: boolean } = {
//     brandDropdown: false,
//     ratingDropdown: false,
//     categoryDropdown: false,
//     priceRangeDropdown: false
//   };
  

//   // Toggle the visibility of a dropdown
//   toggleDropdown(dropdown: string): void {
//     this.showDropdowns[dropdown] = !this.showDropdowns[dropdown];
//   }

//   priceRange: number = 500; // Default value for the price range
//   minPrice: number = 0;     // Minimum price for the range
//   maxPrice: number = 1000;  // Maximum price for the range
//   // filteredProducts = [this.products]


//   onPriceChange() {
//     console.log('Selected Price Range:', this.priceRange);
//     this.filterProductsByPrice();
//   }

//   // Method to filter products based on price range
//   filterProductsByPrice() {
//     // this.filteredProducts = this.products.filter(product => 
//     //   product.price <= this.priceRange
//     // );
//     console.log("filtered by range")
//   }
// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { FilterProductService } from '../filter-product.service';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [
    MatCheckboxModule,
    MatSliderModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css'],
})
export class SideNavbarComponent {

  constructor(private filterProductService: FilterProductService) {}
  
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

  priceRange: number = 500; // Default value for the price range
  minPrice: number = 0;     // Minimum price for the range
  maxPrice: number = 100000;  // Maximum price for the range

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

  applyFilter() {
    this.filterProductService.setFilters('Electronics', 'Dell', 0, 100000, 0)
    this.filterProductService.getFilteredData()
  }
}
