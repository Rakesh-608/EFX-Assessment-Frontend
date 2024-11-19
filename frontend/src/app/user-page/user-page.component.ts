import { Component } from '@angular/core';
import { TopNavbarComponent } from '../top-navbar/top-navbar.component';
import { FilterProductService } from '../filter-product.service';
import { Product } from '../../models/product';
import { MatCheckbox } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
>>>>>>> b6ee0ad6b3f06743515c4a3a105cfb0aeb46a42a

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [TopNavbarComponent, MatCheckbox, CommonModule, FormsModule],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

  products: Product[] = [];
  selectedProductId: string | null = null;

  brands = ['Brand A', 'Brand B', 'Brand C', 'Brand D'];
  ratings = [1, 2, 3, 4, 5];
  categories = ['Electronics', 'Footwear','Clothing', 'Kitchenware', 'Furniture'];
  prices = [10000, 20000, 30000, 40000, 50000];
  search_query: string = '';

  showDropdowns: { [key: string]: boolean } = {
    brandDropdown: false,
    ratingDropdown: false,
    categoryDropdown: false,
    priceDropdown: false,
  };

  selectedBrands: string[] = [];
  selectedRatings: number[] = [];
  selectedCategories: string[] = [];
  selectedPrices: number[] = [];

  constructor(private filterService: FilterProductService, private router: Router) {}

  ngOnInit(): void {
    this.filterService.setFilteredData().subscribe(
      (data: Product[]) => {
        this.products = data;
      },
      (error) => console.error('Error fetching products', error)
    );
  }

  searchFunction(search_query: string): void{
    this.filterService.getProductByName(search_query).subscribe(
      (data: Product[]) => {
        console.log(data);
        this.products = data;
      },
      (error) => console.error('Error fetching products', error)
    );
  }

  toggleDropdown(dropdown: string): void {
    this.showDropdowns[dropdown] = !this.showDropdowns[dropdown];
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


  onSelectProduct(productId: string): void {
    this.selectedProductId = this.selectedProductId === productId ? null : productId;
  }

  isProductSelected(productId: string): boolean {
    return this.selectedProductId === productId;
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
  
  
  applyFilter(): void {
    this.filterService.setFilters(
      this.getCategories(this.selectedCategories),
      this.getBrands(this.selectedBrands),
      this.getMinimumPrice(this.selectedPrices),
      this.getMaximumPrice(this.selectedPrices),
      this.getMinimumRating(this.selectedRatings)
    );
  
    this.filterService.setFilteredData().subscribe(
      (data: Product[]) => {
        this.products = data;
      },
      (error) => console.error('Error fetching filtered products', error)
    );
  }

  navigateToProductCard(product:Product){
    this.router.navigate(['./product-card'])
  }
  

}
