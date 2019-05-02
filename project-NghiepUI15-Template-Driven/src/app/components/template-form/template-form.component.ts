import { Component, OnInit } from '@angular/core';
import { User } from './../../models/user.class';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  public user : User = new User();

  constructor() { }

  ngOnInit() {
  }

  onSubmitForm(frmUser : NgForm) {
    if(frmUser.valid) {
      console.log('this.user',this.user);
    }
  }

  onResetForm(frmUser : NgForm) {
    frmUser.reset();
  }

  
}
