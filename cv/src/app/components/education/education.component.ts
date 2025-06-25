import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';


@Component({
  selector: 'app-education',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  router = inject(Router);
 

navToWeb(){
  this.router.navigate(['/skill'])
}
 
}
