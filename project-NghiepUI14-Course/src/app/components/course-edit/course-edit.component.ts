import { Component, OnInit,OnDestroy } from '@angular/core';
import { Course } from './../../models/course.models';
import { Subscription } from 'rxjs';
import { CourseService } from './../../services/course.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit,OnDestroy {
  public course : Course;
  public subcription : Subscription;
  // Khai báo biến subcription lắng nghe activeRouter
  public subcriptionParams : Subscription;
  constructor(
    public courseService : CourseService,
    public routerService : Router,
    public activeRouterService : ActivatedRoute
  ) { }

  ngOnInit() {
    this.course = new Course();
    this.loaddata();
  }

  loaddata() {
    this.subcriptionParams = this.activeRouterService.params.subscribe((data : Params) => {
      let id = data.id;
      this.subcription = this.courseService.getOneCourse(id).subscribe((course : Course) => {
        this.course = course;
      })
    })
  }

  onEditCourse() {
    this.subcription = this.courseService.updateCourse(this.course).subscribe((data : Course) => {
      if(data && data.id) {
        this.routerService.navigate(['courses']);
      }
    })
  }

  ngOnDestroy() {
    if(this.subcription) {
      this.subcription.unsubscribe();
    }
    if(this.subcriptionParams) {
      this.subcriptionParams.unsubscribe();
    }
  }
}
