import { Component } from '@angular/core';
import { SocialMediaComponent } from "../social-media/social-media.component";
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-home',
  imports: [SocialMediaComponent,MatButtonModule, RouterLink],
  templateUrl: './card-home.component.html',
  styleUrl: './card-home.component.css'
})
export class CardHomeComponent {

}
