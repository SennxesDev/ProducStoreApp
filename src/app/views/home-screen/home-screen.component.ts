import { Component } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent {
  navActive = false;
  // Método para alternar la visibilidad del menú
  toggleNav() {
    this.navActive = !this.navActive;
  }
}
