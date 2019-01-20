import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoveListComponent } from './components/move-list/move-list.component';
import { MovieAddEditComponent } from './components/movie-add-edit/movie-add-edit.component';

// Service 
import { MovieService } from './services/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    MoveListComponent,
    MovieAddEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
