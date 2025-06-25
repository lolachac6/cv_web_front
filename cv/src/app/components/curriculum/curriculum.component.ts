import { Component, inject } from '@angular/core';
import { CurriculumService } from '../../services/curriculum.service';
import { Icurriculum } from '../../interfaces/i-curriculum.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';



@Component({
  imports: [MatButtonModule, MatInputModule, MatSelectModule, FormsModule],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.css'
})
export class CurriculumComponent {
  curriculumServices = inject(CurriculumService);
  data:string="";
  jobs: string[] = [ "All jobs","Hospital","Developer","Cook",];
  arrExperience: Icurriculum[]= [];
  arrExperienceFilter:Icurriculum[]=[];

  async ngOnInit(){
    try{
      this.arrExperience = await this.curriculumServices.getAllExperience();
      console.log(this.arrExperience);
    }catch(err){
      console.log(err);
    }
  }

  upperContent(data: string) {
  if (!data) return "";
  return data[0].toUpperCase() + data.slice(1);
}

  content(){
    this.arrExperienceFilter = this.arrExperience.filter(exp=>exp.type === this.upperContent(this.data))
  }
  

}
