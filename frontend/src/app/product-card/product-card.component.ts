import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../models/product';
import {MatBadgeModule} from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, MatBadgeModule, MatIconModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() isSelected: boolean = false;
  @Output() selectProduct = new EventEmitter<void>();

  // Emit event on click
  onSelect() {
    this.selectProduct.emit();
  }



  isInCart = false;
  toggleCart() {
    this.isInCart = !this.isInCart;
    // You can add additional logic here to handle adding/removing from the cart
    if (this.isInCart) {
      // Logic for adding item to cart
      console.log('Item added to cart');
    } else {
      // Logic for removing item from cart
      console.log('Item removed from cart');
    }
  }
}
