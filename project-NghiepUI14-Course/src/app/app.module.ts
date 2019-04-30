import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CourseComponent } from './components/course/course.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseAddComponent } from './components/course-add/course-add.component';
import { CourseEditComponent } from './components/course-edit/course-edit.component';

// Import Service
import { CourseService } from './services/course.service';

const appRoutes: Routes = [
  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'courses',
    component : CourseComponent,
    children : [
      {
        path: '',
        component: CourseListComponent
      },
      {
        path: ':id/edit',
        component: CourseEditComponent
      },
      {
        path: 'add',
        component: CourseAddComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    CourseListComponent,
    CourseAddComponent,
    CourseEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
