import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  n1: any=0;
  n2: any=0;
  result1: any=0;
  add(num:number,num1:number){
    this.result1=num+num1;
    return this.result1;
  }

}
