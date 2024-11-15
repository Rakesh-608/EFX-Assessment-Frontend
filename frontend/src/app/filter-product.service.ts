import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class FilterProductService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8000/products"
  data!: Product[]
  filters = {category: '', brand: '', minPrice: 0, maxPrice: 1000000, minRating: 0}

  
  setFilters(
    category: string,
    brand: string,
    minPrice: number,
    maxPrice: number,
    minRating: number
  ) {
    this.filters.category = category
    this.filters.brand = brand
    this.filters.minPrice = minPrice
    this.filters.maxPrice = maxPrice
    this.filters.minRating = minRating
  }
  setFilteredData(): Observable<Product[]> {
    // return this.http.get<Product[]>(this.url+`/filters?categoryName=${this.filters.category}&brand=${this.filters.brand}&minPrice=${this.filters.minPrice}&maxPrice=${this.filters.maxPrice}&minRating=${this.filters.minRating}`)
    // const params = new HttpParams().append('categoryName', this.filters.category).append('brand', this.filters.brand)
    const params = new HttpParams().appendAll({
      'categoryName': this.filters.category,
      'brand': this.filters.brand,
      'minPrice': this.filters.minPrice,
      'maxPrice': this.filters.maxPrice,
      'minRating': this.filters.minRating
    })
    
    console.log(params.get('brand'));

    return this.http.get<Product[]>(this.url+`/filters`, {params})
  }

  getFilteredData() {
    setTimeout(() => {
      this.setFilteredData().subscribe(
        (data) => {
          console.log("Data fetched", data);
          this.data = data
          console.log(this.data);
          
        },
        (error) => console.log(error)
      )
    }, 1000);
    return this.data
  }
}
