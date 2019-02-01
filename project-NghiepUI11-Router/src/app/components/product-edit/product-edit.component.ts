import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(
    public activatedRouteService: ActivatedRoute,
  ) { }

  // Lấy cú pháp trên đường dẫn


  ngOnInit() {
    this.handleParams();
  }

  handleParams(){
    this.activatedRouteService.params.subscribe(data => {
      let id = data.id;
      console.log(id);
      
    })
  }

}
