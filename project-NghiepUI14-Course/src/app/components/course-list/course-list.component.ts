import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseService } from './../../services/course.service';
import { Subscription } from 'rxjs';
import { Course } from './../../models/course.models';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  public subcription : Subscription;
  public courses : Course[] = [];

  constructor(public courseService : CourseService) { }

  ngOnInit() {
    this.subcription = this.courseService.getAllCourse().subscribe((data: Course[]) => {
     this.courses = data;
    })
  }

  ngOnDestroy() {
    if(this.subcription) {
      this.subcription.unsubscribe();
    }
  }

}
