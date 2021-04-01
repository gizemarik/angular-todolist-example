import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-unit',
  template: `
 
  <input #inputElementRef
         [value]="name"
         (keyup.enter)="changeName(inputElementRef.value)">

  <button (click)="changeName(inputElementRef.value)">Save</button>
  `,
  styleUrls: ['./form-unit.component.scss']
})

export class FormUnitComponent implements OnInit {

  name = 'First Task';

  constructor() { 
  }


  ngOnInit(): void {
  }

  changeName(newName: string){
    this.name = newName; 
  }


}
