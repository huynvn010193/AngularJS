import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-validate',
  templateUrl: './error-validate.component.html',
  styleUrls: ['./error-validate.component.css']
})
export class ErrorValidateComponent implements OnInit {
  @Input('control') control;
  @Input('name-control') controlName;

  constructor() { }

  ngOnInit() {
  }

  get message() {
    for( let err in this.control.errors) {
      if(this.control.dirty) {
        return this.getErrorMessage(err,this.control.errors[err])
      }
    }
  }

  getErrorMessage(err,value) {
    let messages = {
      'required' : `${this.controlName} is Required`,
      'minlength' : `Minlength : ${this.controlName} ${value.requiredLength} character`,
      'maxlength' : `Maxlength : ${this.controlName} ${value.requiredLength} character`,
      'pattern' : `${this.controlName} invalid`
    }
    return messages[err];
  }

}
