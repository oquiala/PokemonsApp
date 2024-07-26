
import { Component } from '@angular/core';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';



@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuBarComponent,
    FooterComponent
  ],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {


}
