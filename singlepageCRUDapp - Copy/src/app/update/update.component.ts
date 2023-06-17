import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  musicId: number = 0;
  admin: any;
 
   constructor(private productService:ProductService,private route:ActivatedRoute,private router:Router){
 
   }
 
   ngOnInit():void{
    this.musicId=this.route.snapshot.params['id'];
    this.productService.getProductById(this.musicId).subscribe((admin)=>{this.admin=admin;},(error)=>{console.log("message",error);});
 
   }
  
 
   saveUpdatedProduct(): void {
     this.productService.saveProduct(this.admin).subscribe(
       (data) => {
        this.gotoProductList();
        //  console.log('Product updated successfully');
       },
       (error) => {
         console.log('Error updating product:', error);
       }
     );
   }
   gotoProductList() {
    this.router.navigate(['retrieve']);
  }
  }