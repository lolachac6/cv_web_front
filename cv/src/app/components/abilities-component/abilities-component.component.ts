import { Component, inject } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ISkill } from '../../interfaces/i-skill.interface';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-abilities-component',
  imports: [MatProgressSpinner ],
  templateUrl: './abilities-component.component.html',
  styleUrl: './abilities-component.component.css'
})
export class AbilitiesComponentComponent {
  
   arrPersonalSkill: ISkill[] = [];
    SkillService = inject(SkillsService);

  async ngOnInit(){
    this.arrPersonalSkill = await this.SkillService.getAllPersonalSkills()
  }

}
