import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/service/product.service';
import { Product } from '../model/Product';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product:Product=new Product();
  constructor(private productService:ProductService,private router:Router){

  }

  ngOnInit():void{

  }
  onSubmit(){
    this.saveProduct();
    console.log(this.product);
  }

  saveProduct() {
   
    this.productService.saveProduct(this.product).subscribe(data=>
      {
        this.gotoProductList();
      },
      error=>console.log(error));
  }   
  gotoProductList() {
    this.router.navigate(['/retrieve']);
  }
    


}
