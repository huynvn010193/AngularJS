import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  logging(): void{
    console.log('Hello');
  }
  
}
