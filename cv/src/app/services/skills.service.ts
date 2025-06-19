import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISkill } from '../interfaces/i-skill.interface';
import { firstValueFrom } from 'rxjs';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  http = inject(HttpClient);
  private baseUrl : string= environment.apiUrlSkill;

  getAll():Promise<ISkill[]>{
    return firstValueFrom(this.http.get<ISkill[]>(this.baseUrl));
  }
  
}
