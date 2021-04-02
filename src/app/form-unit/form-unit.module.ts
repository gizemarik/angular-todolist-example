import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {FormUnitRoutingModule  } from "./form-unit-routing.module";
import {  FormUnitComponent} from './form-unit.component'

@NgModule({
  imports: [CommonModule, FormUnitRoutingModule],
  declarations: [FormUnitComponent]
})
export class FormUnitModule {}