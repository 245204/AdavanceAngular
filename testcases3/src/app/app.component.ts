import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testcases3';
  counter = 0;

  increaseCounter() {
    this.counter++;
  }
}
