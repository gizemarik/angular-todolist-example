import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-unit',
  template: `
 <div class="app-form-elements">

 <div class="input-part">
  <mat-form-field appearance="outline">
    <mat-label>New Task</mat-label>
    <input class="todo-input" #inputElementRef matInput  (keyup.enter)="submitValue(inputElementRef.value)">
  </mat-form-field>
 </div>

<div class="btn-part">
  <button mat-raised-button color="primary" class="btn" (click)="submitValue(inputElementRef.value)">Add</button>
</div>

  

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
