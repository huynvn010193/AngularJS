import { Injectable } from '@angular/core';
import { Movie } from './../models/movie.class';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public movies : Movie[] = [
    new Movie(1,'ĐƯỜNG VỀ NHÀ CỦA CÚN CON','https://www.galaxycine.vn/dat-ve/a-dogs-way-home','Charles Martin Smith'),
    new Movie(2,'BỘ BA QUÁI NHÂN','https://www.galaxycine.vn/dat-ve/glass','M. Night Shyamalan'),
    new Movie(3,'ĐẠI CHIẾN ÂM DƯƠNG','https://www.galaxycine.vn/dat-ve/the-knight-of-shadows-between-yin--yang','Nghiêm Gia'),
    new Movie(4,'HUYỀN THOẠI NGÔI SAO NHẠC ROCK','https://www.galaxycine.vn/dat-ve/bohemian-rhapsody','Bryan Singer'),
  ];

  constructor() { }

  getAllMovies(){
    return this.movies;
  }

  addMovie(movie : Movie){
    movie.id = this.getLastID(this.movies);
    this.movies.push(movie);
  }

  getLastID(movies){
    let lastID = movies.length > 0 ? (movies.sort((a,b) => {
      if(a.id > b.id) return -1;
      else if(a.id < b.id) return 1;
      else return 0;
    })[0].id + 1) : 1;
    return lastID;
  }
}
