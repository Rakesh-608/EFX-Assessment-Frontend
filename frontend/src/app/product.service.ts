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
}
