import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoveListComponent } from './components/move-list/move-list.component';
import { MovieAddEditComponent } from './components/movie-add-edit/movie-add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MoveListComponent,
    MovieAddEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
