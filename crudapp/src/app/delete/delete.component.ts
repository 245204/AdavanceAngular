import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  productId: number = 0;
  //product: any;
  constructor(private productservice:ProductService){

  }
  ngOnInit(): void {
      
  }
  deleteProduct(): void {
    this.productservice.deleteProductbyId(this.productId).subscribe(
      (response) => {
        console.log('Product deleted successfully');
      },
      (error) => {
        console.log('Error deleting product:', error);
      }
    );

  }

}
