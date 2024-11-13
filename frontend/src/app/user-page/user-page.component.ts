import { Component } from '@angular/core';
import { TopNavbarComponent } from '../top-navbar/top-navbar.component';
import { SideNavbarComponent } from '../side-navbar/side-navbar.component';
import { MainBodyComponent } from '../main-body/main-body.component';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [TopNavbarComponent, SideNavbarComponent, MainBodyComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

}
