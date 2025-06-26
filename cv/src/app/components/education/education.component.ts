import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-education',
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  router = inject(Router);
 

navToWeb(){
  this.router.navigate(['/educationWeb'])
}
 
}
