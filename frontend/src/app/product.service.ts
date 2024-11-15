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

  createExpense(product: Product): Observable<Object>{
    return this.http.post<Product>(this.url+`/add`, product)
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/all`);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.url}/${id}`, product);
  }

  deleteProductById(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

}
