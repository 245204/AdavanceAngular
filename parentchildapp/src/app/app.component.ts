import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentchildapp';
  enterName="";
  parentData="";
  give="";
  showData="";
  transferData(){
    this.parentData=this.enterName;
    this.showData=this.give;
  }

  value="";
  sendData(value:string){
    this.value= value;
  }

}
