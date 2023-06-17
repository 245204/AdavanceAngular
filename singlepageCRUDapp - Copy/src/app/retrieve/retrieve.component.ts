import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/service/product.service';
import { Admin } from '../model/Admin';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent {
  constructor(private service:ProductService,private router:Router){

  }

  admin:Admin[]=[];

   ngOnInit():void{
    this.admin=this.getProducts();
   } 
  //  gotoProductList() {
  //   this.router.navigate(['retrieve']);
  // }
    deleteProduct(id:number): void {
     this.service.deleteProductbyId(id).subscribe(
      (data) => {
       this.admin=this.admin.filter(item=>item.musicId!==id);
        // this.gotoProductList();
       },
       (error) => {
         console.log('Error deleting product:', error);
       }
     )}


   getProducts():any{
    this.service.getProducts().subscribe((admin)=>{
    this.admin=admin;
   });

  }
}
