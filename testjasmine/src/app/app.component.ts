import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testjasmine';
  num1: any=0;
  num2: any=0;
  result: any=0;
  subtract(n1:number,n2:number){
    this.result=n1-n2;
    return this.result;

  }
}
