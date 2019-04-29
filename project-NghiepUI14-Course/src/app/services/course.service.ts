import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './../models/course.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  public API : string = 'http://localhost:3000/courses';

  constructor(
    public http: HttpClient
  ) { }

  getAllCourse() : Observable<Course[]> {
    return this.http.get<Course[]>(this.API);
  }

}
