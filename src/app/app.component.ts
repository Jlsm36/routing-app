import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive], // El RouterLink nos ayuda a navegar sin refrescar la página
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

// El RouterLink nos ayuda a navegar sin refrescar la página
//  RouterLinkActive nos indica cual es la ruta activa y le puede dar propiedades css
export class AppComponent {
  title = 'routing-app';
}
