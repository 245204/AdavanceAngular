import { Component } from '@angular/core';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
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
