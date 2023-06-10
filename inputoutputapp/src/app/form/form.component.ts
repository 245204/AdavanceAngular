import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input()
  parentdata1!:string;
  @Input()
  parentdata2!:string;
  @Input()
  parentdata3!:string;

  @Output()
  public submitdata=new EventEmitter<string>();
  submit(){
    this.submitdata.emit("Succefully created");
  }

}
