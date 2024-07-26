import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MENU } from '../../../constants/menu';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [
    MenubarModule
  ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {
  items = [...MENU];

}
