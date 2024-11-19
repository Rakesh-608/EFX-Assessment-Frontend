import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable, tap } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class FilterProductService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8000/products"
  data!: Product[]
  categoryList: string[]=[]
  filters = {category: [''], brand: [''], minPrice: 0, maxPrice: 1000000, minRating: -1}
  search_query = ""

  getProductByName(search_query: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/search/${search_query}`);
  }

  setFilters(
    category: string[],
    brand: string[],
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

  getFilteredData(): Observable<Product[]> {
    return this.setFilteredData();
  }
  
  private filteredProductsSubject = new BehaviorSubject<Product[]>([]);
  filteredProducts$ = this.filteredProductsSubject.asObservable();

  setFilteredData(): Observable<Product[]> {
  const params = new HttpParams().appendAll({
    'categoryName': this.filters.category.join(','),
      'brand': this.filters.brand.join(','),
      'minPrice': this.filters.minPrice,
      'maxPrice': this.filters.maxPrice,
      'minRating': this.filters.minRating
  });

    console.log("Brands: "+params.get('brand')+" from filter service");
    console.log("Categories: "+params.get('categoryName')+" from filter service")
    console.log("MinPrice: "+params.get('minPrice')+" from filter service")
    console.log("Maxprice: "+params.get('maxPrice')+" from filter service")
    console.log("MinRating: "+params.get('minRating')+" from filter service")
    console.log(`Params: ${params}`)

  return this.http.get<Product[]>(this.url + `/filters`, { params }).pipe(
    tap((products) => {this.filteredProductsSubject.next(products);
      console.log(products);})    
  );
}

}
