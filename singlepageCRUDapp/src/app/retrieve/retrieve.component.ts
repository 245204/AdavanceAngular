import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/service/product.service';
import { Product } from '../model/Product';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent {
  constructor(private service:ProductService,private router:Router){

  }

  products:Product[]=[];

   ngOnInit():void{
    this.products=this.getProducts();
   } 

   deleteProduct(id:number): void {
    this.service.deleteProductbyId(id).subscribe(
      (data) => {
        this.products=this.products.filter(item=>item.productId!==id);
      },
      (error) => {
        console.log('Error deleting product:', error);
      }
    )}


   getProducts():any{
    this.service.getProducts().subscribe((products)=>{
    this.products=products;
   });

  }
}
