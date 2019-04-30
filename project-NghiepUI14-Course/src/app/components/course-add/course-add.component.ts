import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from './../../models/course.models';
import { Subscription } from 'rxjs';
import { CourseService } from './../../services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit, OnDestroy {
  public course : Course;
  public subcription : Subscription;

  constructor(
    public courseService : CourseService,
    public routerService : Router
  ){ }

  ngOnInit() {
    // Khởi tạo biến để tránh trường hợp bị null vì lúc này biến this.course = undefined
    this.course = new Course();
    console.log('course ngOnInit()',this.course);
  }

  onAddCourse() {
    console.log('this.course',this.course);
    this.subcription = this.courseService.addCourse(this.course).subscribe(data => {
      if(data && data.id) {
        this.routerService.navigate(['courses']);
      }
    });
  }

  ngOnDestroy() {
    if(this.subcription) {
      this.subcription.unsubscribe();
    }
  }
}
