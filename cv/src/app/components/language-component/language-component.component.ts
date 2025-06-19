import { Component, inject } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SkillsService } from '../../services/skills.service';
import { ISkill } from '../../interfaces/i-skill.interface';


@Component({
  selector: 'app-language-component',
  imports: [MatProgressBarModule],
  templateUrl: './language-component.component.html',
  styleUrl: './language-component.component.css'
})
export class LanguageComponentComponent {

  SkillService= inject(SkillsService);
  arrSkills:ISkill[] = [];



async ngOnInit(){
  try{
    this.arrSkills = await this.SkillService.getAll();
  }catch(err){
    console.log(err);
  }
}



}
