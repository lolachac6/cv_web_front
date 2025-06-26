import { Component, inject } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { CoursesService } from '../../services/courses.service';
import { ICourse } from '../../interfaces/i-course.interface';

@Component({
  selector: 'app-education-web',
  imports: [MatGridListModule],
  templateUrl: './education-web.component.html',
  styleUrl: './education-web.component.css'
})
export class EducationWebComponent {

  coursesService = inject(CoursesService);
  arrCoursesWeb: ICourse[]= [];


  async ngOnInit(){
    this.arrCoursesWeb = await this.coursesService.getAllExperience();
  }

  apareceElTitulo(url:string,id:Number){
    let ids = String(id);
    const x = document.getElementById(ids);
    let img = document.querySelector('.elemento-invisible');
    if(!img){
    let image = document.createElement('img');
    image.setAttribute('src',url);
    image.className ='elemento-invisible'
    image.style.width = '600px';
    image.style.height = 'auto';
      x?.appendChild(image);
    }else{
      img.remove();
    }
    
      
  }
  
}