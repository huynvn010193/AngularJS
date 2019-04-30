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

  getOneCourse(id : number) : Observable<Course> {
    return this.http.get<Course>(`${this.API}/${id}`);
  } 

  addCourse(course : Course) : Observable<Course> {
    console.log('course service',course);
    return this.http.post<Course>(this.API,course);
  }

  deleteCourse(id : number) : Observable<Course> {
    return this.http.delete<Course>(`${this.API}/${id}`);
  }

  updateCourse(course : Course) : Observable<Course> {
    return this.http.put<Course>(`${this.API}/${course.id}`,course);
  } 

}
