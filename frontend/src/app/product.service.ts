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

  // getAllItem(): Observable<Object[]>{
  //   return this.http.get<Product[]>(this.url+`/all`)
  // }

  // updateItem(id: number, product: Product): Observable<Object>{
  //   return this.http.put<Product>(this.url+`/${id}`, product)
  // }

  // deleteItem(id: number): Observable<void>{
  //   return this.http.delete<void>(this.url+`/${id}`)
  // }
}
