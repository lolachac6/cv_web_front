import { Component } from '@angular/core';
import { AboutMeComponentsComponent } from "../about-me-components/about-me-components.component";
import { MyProyectComponentsComponent } from "../my-proyect-components/my-proyect-components.component";


@Component({
  selector: 'app-home-components',
  imports: [AboutMeComponentsComponent, MyProyectComponentsComponent],
  templateUrl: './home-components.component.html',
  styleUrls: ['./home-components.component.css']
})
export class HomeComponentsComponent {



}
