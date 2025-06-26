import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { ICourse } from '../interfaces/i-course.interface'; // Adjust the path and name as needed
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private http = inject(HttpClient);
  baseUrl: string = environment.apiUrlCourses;

  getAllExperience(): Promise<ICourse[]> {
    return firstValueFrom(this.http.get<ICourse[]>(this.baseUrl));
  }

  
}


