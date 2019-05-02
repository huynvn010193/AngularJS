import { Component, OnInit } from '@angular/core';
import { User } from './../../models/user.class';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  public user : User;

  constructor() { }

  ngOnInit() {
  }

}
