import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/service/product.service';
import { Admin } from '../model/Admin';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  admin:Admin=new Admin();
  constructor(private productService:ProductService,private route:Router){

  }

  ngOnInit():void{

  }
  onSubmit(){
    this.saveProduct();
    console.log(this.admin);
  }

  saveProduct() {
   
    this.productService.saveProduct(this.admin).subscribe(data=>
      {
        this.gotoProductList();
      },
      error=>console.log(error));
  }   
  gotoProductList() {
    this.route.navigate(['/retrieve']);
  }
    


}
