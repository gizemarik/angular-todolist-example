import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-unit',
  template: `
 <div class="app-form-elements">
  <input  class="todo-input"
  #inputElementRef
  [value]="name"
  (keyup.enter)="submitValue(inputElementRef.value)">

  <button class="btn" (click)="submitValue(inputElementRef.value)">Add</button>
 </div>

  `,
  styleUrls: ['./form-unit.component.scss']
})

export class FormUnitComponent implements OnInit {

  name = 'First Task';
  @Output() submit: EventEmitter<string> = new EventEmitter();
  constructor() { 
  }


  ngOnInit(): void {
  }

  submitValue(newName: string){
    this.submit.emit(newName);
  }


}
