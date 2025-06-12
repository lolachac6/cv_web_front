import { Component } from '@angular/core';
import { AboutMeComponentsComponent } from "../about-me-components/about-me-components.component";
import { MyProyectComponentsComponent } from "../my-proyect-components/my-proyect-components.component";
import { CardHomeComponent } from "../card-home/card-home.component";


@Component({
  selector: 'app-home-components',
  imports: [AboutMeComponentsComponent, MyProyectComponentsComponent, CardHomeComponent],
  templateUrl: './home-components.component.html',
  styleUrls: ['./home-components.component.css']
})
export class HomeComponentsComponent {



}
