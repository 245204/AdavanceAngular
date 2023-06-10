import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  p1!:string;
  @Input()
  p2!:string;
  @Input()
  p3!:string;
  
  @Output()
  public tabledata=new EventEmitter<string>();
  onsubmit(){

    this.tabledata.emit("table successfully created");
  }
}
