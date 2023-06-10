import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inputoutputapp';


  name="";
  phone="";
  dob="";
  parentdata1="";
  parentdata2="";
  parentdata3="";

  view(){
    this.parentdata1=this.name;
    this.parentdata2=this.phone;
    this.parentdata3=this.dob;
  }
  value1="";
  tabledata(value1:string){
    this.value1=value1;
  }

  pid="";
  pname="";
  pdes="";
  p1="";
  p2="";
  p3="";

  showtable(){
    this.p1=this.pid;
    this.p2=this.pname;
    this.p3=this.pdes;
  }
  
  value="";
  submitdata(value:string){
    this.value=value;
  }
}
