import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-unit',
  template: `
  <p>
    input-button-unit works!
    The name is: {{ name }}
  </p>

  <input [value]="name" 
        (keyup.enter)="changeName($event)">

  <button>Save</button>
  `,
  styleUrls: ['./form-unit.component.scss']
})

export class FormUnitComponent implements OnInit {

  name = 'First Task';

  constructor() { 
  }


  ngOnInit(): void {
  }

  changeName(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.name = target.value; 
  }

}
