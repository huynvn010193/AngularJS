import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-driven-form',
  templateUrl: './data-driven-form.component.html',
  styleUrls: ['./data-driven-form.component.css']
})
export class DataDrivenFormComponent implements OnInit {
  public frmUser : FormGroup;

  constructor(
    private _formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.frmUser = this._formBuilder.group({
      username : ['',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]],
      password : ['',[Validators.required]],
      fullname : ['',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]],
      email : ['',Validators.pattern('^[a-z][a-z0-9.-_]{1,}@[a-z0-9.-]{2,}[.]{1}[a-zA-Z]{2,}')],
      phone : ['']
    });

    // this.frmUser.valueChanges.subscribe(data => {
    //   console.log('data-valueChanges',data);
    // })
  }

  onSubmitForm() {
    console.log('this.frmUser.value',this.frmUser);
  }

  onResetForm() {
    this.frmUser.reset();
  }
}
