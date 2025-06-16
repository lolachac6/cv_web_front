import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { LanguageComponentComponent } from "../language-component/language-component.component";
import { AbilitiesComponentComponent } from "../abilities-component/abilities-component.component";

@Component({
  selector: 'app-skill-components',
  imports: [ LanguageComponentComponent, AbilitiesComponentComponent],
  templateUrl: './skill-components.component.html',
  styleUrl: './skill-components.component.css'
})
export class SkillComponentsComponent {

}
