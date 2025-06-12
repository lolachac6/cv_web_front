import { Component } from '@angular/core';
import { SocialMediaComponent } from "../social-media/social-media.component";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card-home',
  imports: [SocialMediaComponent,MatButtonModule],
  templateUrl: './card-home.component.html',
  styleUrl: './card-home.component.css'
})
export class CardHomeComponent {

}
