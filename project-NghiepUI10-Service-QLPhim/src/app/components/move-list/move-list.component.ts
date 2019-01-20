import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../services/movie.service';
import { Movie } from './../../models/movie.class';
 
@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.css']
})
export class MoveListComponent implements OnInit {
  public arrMovies = [];

  constructor(
    private _movieService : MovieService
  ) { }

  ngOnInit() {
    this.arrMovies = this._movieService.getAllMovies();
  }

}
