import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Icurriculum } from '../interfaces/i-curriculum.interface';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {
  private http: HttpClient = inject(HttpClient);
  private baseUrl : string= environment.apiUrlCurriculum;
  
  getAllExperience(): Promise<Icurriculum[]> {
    return firstValueFrom(this.http.get<Icurriculum[]>(this.baseUrl));
  }

}

