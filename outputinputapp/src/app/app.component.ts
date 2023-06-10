import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'outputinputapp';
  items=["item1","item2","item3"];

  addItem(newItem:string){
    this.items.push(newItem);
  }
  counter=1;
  increasing(){
    this.counter++;
  }
  decreasing(){
    this.counter--;
  }


  agreed = 0;
  disagreed = 0;
  voters = ['bheem', 'chutki', 'raju'];

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
}
