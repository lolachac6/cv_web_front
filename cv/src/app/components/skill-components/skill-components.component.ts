import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { LanguageComponentComponent } from "../language-component/language-component.component";

@Component({
  selector: 'app-skill-components',
  imports: [MatProgressBarModule, LanguageComponentComponent],
  templateUrl: './skill-components.component.html',
  styleUrl: './skill-components.component.css'
})
export class SkillComponentsComponent {

}
