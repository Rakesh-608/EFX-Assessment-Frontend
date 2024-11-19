import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "http://localhost:8000/products"
  constructor(private http: HttpClient) { }

  addItem(product: Product): Observable<Object>{
    return this.http.post<Product>(this.url+`/add`, product)
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/all`);
  }

  getProductById(id: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/all`);
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.url}/${id}`, product);
  }

  deleteProductById(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  updateAProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.url}/${product.id}`, product);
  }

}
