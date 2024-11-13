import { Component } from '@angular/core';
import { TopNavbarComponent } from "../top-navbar/top-navbar.component";
import { SideNavbarComponent } from "../side-navbar/side-navbar.component";
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-main-body',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './main-body.component.html',
  styleUrl: './main-body.component.css'
})
export class MainBodyComponent {

}
