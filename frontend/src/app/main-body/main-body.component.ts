import { Component } from '@angular/core';
import { TopNavbarComponent } from "../top-navbar/top-navbar.component";
import { SideNavbarComponent } from "../side-navbar/side-navbar.component";
import { ProductCardComponent } from "../product-card/product-card.component";
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { FilterProductService } from '../filter-product.service';

@Component({
  selector: 'app-main-body',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './main-body.component.html',
  styleUrl: './main-body.component.css'
})
export class MainBodyComponent {
  
  products: Product[] = [];

  constructor(private productService: ProductService, private filterService: FilterProductService) { }

  ngOnInit(): void {
    this.filterService.setFilteredData().subscribe(
    // this.productService.getAllProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
        console.log("from filter service get method");
        
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }
  selectedProductId: string | null = null;

  onSelectProduct(productId: string): void {
    this.selectedProductId = productId === this.selectedProductId ? null : productId;
  }

  isProductSelected(productId: string): boolean {
    return this.selectedProductId === productId;
  }


  
}
